import * as cp from 'child_process';
import { glob } from 'glob';
import * as path from 'path';

import {
  downloadAndUnzipVSCode,
  resolveCliArgsFromVSCodeExecutablePath,
  runTests,
} from '@vscode/test-electron';
import { TestOptions } from '@vscode/test-electron/out/runTest';

const extensionDependencies = [
  'Angular.ng-template',
  'christian-kohler.path-intellisense',
  'cyrilletuzi.angular-schematics',
  'EditorConfig.EditorConfig',
  'esbenp.prettier-vscode',
  'mrmlnc.vscode-scss',
  'ms-vscode.vscode-typescript-tslint-plugin',
  'dbaeumer.vscode-eslint',
  'MS-vsliveshare.vsliveshare',
  'pflannery.vscode-versionlens',
  'streetsidesoftware.code-spell-checker',
];

async function main() {
  const extensionDevelopmentPath = path.resolve(__dirname, '../../');
  const extensionTestsPath = path.resolve(__dirname, './suite-1/');
  const testWorkspacePath = path.resolve(__dirname, './test.code-workspace');
  const vsixFiles = await glob('**/**.vsix', {
    cwd: path.resolve(__dirname, '../../../'),
    absolute: true,
  });

  const vscodeExecutablePath = await downloadAndUnzipVSCode();

  if (vsixFiles.length !== 1) {
    throw new Error(`Exactly one vsix file expected but found: ${vsixFiles}`);
  }

  const vsix = vsixFiles[0];

  const installDependencies = extensionDependencies.reduce(
    (args, dep) => [...args, '--install-extension', dep],
    [] as string[],
  );

  const [cliPath, ...args] = resolveCliArgsFromVSCodeExecutablePath(vscodeExecutablePath);

  // Use cp.spawn / cp.exec for custom setup
  cp.spawnSync(cliPath, [...args, '--force', ...installDependencies], {
    encoding: 'utf-8',
    stdio: 'inherit',
  });

  // Install own  extension separately
  cp.spawnSync(cliPath, [...args, '--force', '--install-extension', vsix], {
    encoding: 'utf-8',
    stdio: 'inherit',
  });

  const options: TestOptions = {
    extensionDevelopmentPath,
    extensionTestsPath,
    launchArgs: [testWorkspacePath],
  };

  console.log(`Test options: ${JSON.stringify(options)}`);

  /**
   * Basic usage
   */
  try {
    await runTests(options);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
