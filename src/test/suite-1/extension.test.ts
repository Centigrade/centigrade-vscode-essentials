import * as assert from 'assert';
import { suiteSetup } from 'mocha';
import * as vscode from 'vscode';
import * as fromTools from '../../types/tools';

suite('Extension Tests', () => {
  const extensionId = 'centigrade.centigrade-vscode-essentials';

  const extensionCommandNames = [
    'extension.addPrettierConfig',
    'extension.addVsCodeSettings',
    'extension.addVsCodeExtensionRecommendations',
    'extension.addEditorConfig',
    'extension.addKarmaConfig',
  ];

  let extension: vscode.Extension<any>;

  suiteSetup(async () => {
    const tmpExtension = vscode.extensions.getExtension(extensionId);

    if (!tmpExtension) {
      assert.fail(`Couldn't find extension with id "${extensionId}"`);
    }

    extension = tmpExtension;

    // Wait 5 seconds till extension are loaded
    await new Promise((resolve) => setTimeout(resolve, 5000));
  });

  test('Tools constants contain proper configuration filenames', () => {
    assert.deepEqual(fromTools.EditorConfig.configFileNames, ['.editorconfig']);
    assert.deepEqual(fromTools.Prettier.configFileNames, ['.prettierrc', '.prettierignore']);
    assert.deepEqual(fromTools.VsCodeSettings.configFileNames, ['settings.json']);
    assert.deepEqual(fromTools.VsCodeExtensionRecommendations.configFileNames, ['extensions.json']);
    assert.deepEqual(fromTools.KarmaConfig.configFileNames, ['karma.conf.js']);
  });

  test('Extension should be present', () => {
    assert.ok(vscode.extensions.getExtension(extensionId));
  });

  test('Extension should activate', function (done) {
    const oneSecondInMilliseconds = 1 * 60 * 1000;
    this.timeout(oneSecondInMilliseconds);

    console.log('Current activation state: ', extension.isActive);

    if (!extension.isActive) {
      extension.activate().then(
        (api) => {
          done();
        },
        (error) => {
          assert.fail(`Extension could get activated: ${error}`);
        },
      );
    }
  });

  test('Extension should register all commands', function (done) {
    const oneSecondInMilliseconds = 1 * 60 * 1000;
    this.timeout(oneSecondInMilliseconds);

    extension
      .activate()
      .then((api) => {
        return vscode.commands.getCommands();
      })
      .then((commands) => {
        for (const commandName of extensionCommandNames) {
          assert.ok(
            commands.find((name) => name === commandName),
            `Command '${commandName}' is not registered.`,
          );
        }
        done();
      });
  });
});
