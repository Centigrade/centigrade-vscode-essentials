import * as fs from 'fs';
import * as path from 'path';
import { commands, ExtensionContext, MessageItem, Uri, window, workspace } from 'vscode';
import { Configuration } from './types/configuration';
import * as fromTools from './types/tools';

('use strict');
interface Choice extends MessageItem {
  readonly confirmed: boolean;
}

const YesOption: Choice = {
  confirmed: true,
  title: 'Yes, overwrite',
};

const NoOption: Choice = {
  confirmed: false,
  title: 'No, leave it as it is.',
};

function addConfiguration(configuration: Configuration, sourceUri: Uri) {
  try {
    let targetUri = sourceUri;
    if (targetUri === undefined) {
      const rootPath = workspace.workspaceFolders[0];
      targetUri = rootPath.uri;
    }

    let targetPath = targetUri.fsPath;
    if (fs.lstatSync(targetPath).isFile()) {
      // try parent folder
      targetPath = path.resolve(targetPath, '..');
    }

    for (let configFileName of configuration.configFileNames) {
      copyConfigurationFromTemplateToTargetPath(configuration.toolName, configFileName, targetPath);
    }
  } catch (error) {
    window.showWarningMessage(error);
  }
}

function copyConfigurationFromTemplateToTargetPath(
  toolName: string,
  configFileName: string,
  targetFolderPath: string,
) {
  const templateFileName = `${configFileName}.tmpl`;
  const templateFilePath = path.resolve(
    __dirname,
    '..',
    'assets',
    'templates',
    toolName,
    templateFileName,
  );

  const targetFilePath = path.resolve(targetFolderPath, configFileName);

  checkWhetherFileCanBeCreated(targetFilePath)
    .then((creationAllowed) => {
      if (creationAllowed) {
        fs.createReadStream(templateFilePath).pipe(fs.createWriteStream(targetFilePath));
      }
    })
    .catch((error) => window.showWarningMessage(error));
}

function checkWhetherFileCanBeCreated(filePath: string): Promise<boolean> {
  if (fs.existsSync(filePath)) {
    return askWhetherFileCanBeCreated(filePath).catch((error) => {
      window.showWarningMessage(error);
      return Promise.reject(error);
    });
  }

  return Promise.resolve(true);
}

function askWhetherFileCanBeCreated(filePath: string): Promise<boolean> {
  return Promise.resolve(
    window
      .showWarningMessage(
        `The file '${filePath}' already exists. Do you want to replace it?`,
        YesOption,
        NoOption,
      )
      .then((choice) => choice !== undefined && choice.confirmed),
  );
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
  const disposableCommands = [
    commands.registerCommand('extension.addPrettierConfig', (targetUri) =>
      addConfiguration(fromTools.Prettier, targetUri),
    ),
    commands.registerCommand('extension.addVsCodeSettings', (targetUri) =>
      addConfiguration(fromTools.VsCodeSettings, targetUri),
    ),
    commands.registerCommand('extension.addVsCodeExtensionRecommendations', (targetUri) =>
      addConfiguration(fromTools.VsCodeExtensionRecommendations, targetUri),
    ),
    commands.registerCommand('extension.addEditorConfig', (targetUri) =>
      addConfiguration(fromTools.EditorConfig, targetUri),
    ),
    commands.registerCommand('extension.addKarmaConfig', (targetUri) =>
      addConfiguration(fromTools.KarmaConfig, targetUri),
    ),
  ];

  context.subscriptions.push(...disposableCommands);
}

// this method is called when your extension is deactivated
export function deactivate() {}
