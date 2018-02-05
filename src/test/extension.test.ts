import * as assert from 'assert';
import * as vscode from 'vscode';

import * as fromTools from '../types/tools';

suite('Extension Tests', () => {
  const ExtensionName = 'centigrade.centigrade-angular-essentials';

  const ExtensionCommandNames = [
    'extension.addBeautifyConfig',
    'extension.addPrettierConfig',
    'extension.addVsCodeSettings',
    'extension.addStylelintConfig',
    'extension.addEditorConfig',
  ];

  test('Tools constants contain proper configuration filenames', () => {
    assert.equal(fromTools.Beautify.configFileName, '.jsbeautifyrc');
    assert.equal(fromTools.EditorConfig.configFileName, '.editorconfig');
    assert.equal(fromTools.Prettier.configFileName, '.prettierrc');
    assert.equal(fromTools.Stylelint.configFileName, '.stylelintrc');
    assert.equal(fromTools.VsCodeSettings.configFileName, 'settings.json');
  });

  test('Extension should be present', () => {
    assert.ok(vscode.extensions.getExtension(ExtensionName));
  });

  test('Extension should activate', function(done) {
    const oneSecondInMilliseconds = 1 * 60 * 1000;
    this.timeout(oneSecondInMilliseconds);

    vscode.extensions
      .getExtension(ExtensionName)
      .activate()
      .then(api => {
        done();
      });
  });

  test('Extension should register all commands', function(done) {
    const oneSecondInMilliseconds = 1 * 60 * 1000;
    this.timeout(oneSecondInMilliseconds);

    vscode.extensions
      .getExtension(ExtensionName)
      .activate()
      .then(api => {
        return vscode.commands.getCommands();
      })
      .then(commands => {
        for (const commandName of ExtensionCommandNames) {
          assert.ok(
            commands.find(name => name === commandName),
            `Command '${commandName}' is not registered.`,
          );
        }
        done();
      });
  });
});
