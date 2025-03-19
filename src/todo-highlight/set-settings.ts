import * as fs from 'node:fs';
import path from 'node:path';
import { window, workspace } from 'vscode';
import { Settings } from './types';

const centigradeRecommendedSettings = {
  'todohighlight.keywords': [
    {
      text: 'hint:',
      color: 'white',
      backgroundColor: 'transparent',
      overviewRulerColor: '#999',
    },
    {
      text: 'performance:',
      color: 'rgb(122, 55, 3)',
      backgroundColor: 'rgb(255, 149, 73)',
      border: 'rgb(122, 55, 3)',
    },
    {
      text: 'debug:',
      color: 'yellow',
      backgroundColor: 'transparent',
      border: 'none',
    },
    {
      text: 'deprecated:',
      color: 'orange',
      backgroundColor: 'transparent',
      border: '1px solid orange',
    },
    {
      text: 'fixme:',
      color: 'red',
      border: '1px solid red',
      backgroundColor: 'rgba(0,0,0,.2)',
      overviewRulerColor: '#f07',
    },
    {
      text: 'TODO:',
      color: 'orange',
      border: '1px solid orange',
      backgroundColor: 'rgba(96, 65, 16, 0.55)',
      overviewRulerColor: 'rgb(253, 201, 80)7',
    },
  ],
  'todohighlight.defaultStyle': {
    color: 'black',
    backgroundColor: '#ffab00',
    overviewRulerColor: '#ffab00',
    cursor: 'pointer',
    border: '1px solid #eee',
    isWholeLine: false,
  },
};

const workspaceUri = workspace.workspaceFolders?.at(0)?.uri;
const ensureDotVscodeFolder = () => {
  if (!workspaceUri?.fsPath) {
    return;
  }

  const dotVsCodeFolderPath = path.join(workspaceUri.fsPath, '.vscode');

  if (!fs.existsSync(dotVsCodeFolderPath)) {
    fs.mkdirSync(dotVsCodeFolderPath);
  }
};
const getSettingsFilePath = () => {
  return workspaceUri ? path.join(workspaceUri.fsPath, '.vscode/settings.json') : null;
};

export async function setRecommendedTodoHighlightSettings() {
  const settings = tryReadSettings();
  const { error, info } = applySettingsAndWrite(settings);

  if (info) {
    await window.showInformationMessage(info);
  } else if (error) {
    await window.showErrorMessage(error);
  }
}

// -----------------------------------
// Module internal functions
// -----------------------------------

function tryReadSettings(): Settings | null {
  ensureDotVscodeFolder();

  const settingsFilePath = getSettingsFilePath();

  if (!settingsFilePath) {
    return null;
  }

  if (fs.existsSync(settingsFilePath)) {
    try {
      const settingsFileContents = fs.readFileSync(settingsFilePath).toString('utf-8');

      return JSON.parse(settingsFileContents);
    } catch {
      return null;
    }
  }

  return null;
}

function applySettingsAndWrite(settings: Settings | null): { error?: string; info?: string } {
  const settingsFilePath = getSettingsFilePath();

  if (!settingsFilePath) {
    return { error: 'Could not create settings. No workspace is opened.' };
  }

  if (!settings) {
    createNewSettings(settingsFilePath);
    return { info: 'Created settings.json with recommended settings' };
  }

  addSettings(settings, settingsFilePath);

  const areSomeSettingsAlreadySet = Object.keys(centigradeRecommendedSettings).some((setting) =>
    settings.hasOwnProperty(setting),
  );

  return areSomeSettingsAlreadySet
    ? { info: 'Overwrote existing settings with recommended values' }
    : { info: 'Added recommended settings to existing settings.json' };
}

function createNewSettings(settingsFilePath: string) {
  const settingsJson = JSON.stringify(centigradeRecommendedSettings, null, 2);
  fs.writeFileSync(settingsFilePath, settingsJson);
}

function addSettings(settings: Settings, settingsFilePath: string) {
  const updatedSettings = { ...settings, ...centigradeRecommendedSettings };
  const settingsJson = JSON.stringify(updatedSettings, null, 2);
  fs.writeFileSync(settingsFilePath, settingsJson);
}
