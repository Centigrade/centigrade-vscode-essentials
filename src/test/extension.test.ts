import * as assert from 'assert';
import * as vscode from 'vscode';
import * as fromTools from '../types/tools';

suite('Extension Tests', () => {
  const ExtensionName = 'centigrade.centigrade-angular-essentials';

  const ExtensionCommandNames = [
    'extension.addPrettierConfig',
    'extension.addVsCodeSettings',
    'extension.addStylelintConfig',
    'extension.addEditorConfig',
    'extension.addKarmaConfig',
  ];

  test('Tools constants contain proper configuration filenames', () => {
    assert.deepEqual(fromTools.EditorConfig.configFileNames, ['.editorconfig']);
    assert.deepEqual(fromTools.Prettier.configFileNames, ['.prettierrc', '.prettierignore']);
    assert.deepEqual(fromTools.Stylelint.configFileNames, ['.stylelintrc']);
    assert.deepEqual(fromTools.VsCodeSettings.configFileNames, ['settings.json']);
    assert.deepEqual(fromTools.KarmaConfig.configFileNames, ['karma.conf.js']);
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
