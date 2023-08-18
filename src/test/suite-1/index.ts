import { glob } from 'glob';
import Mocha from 'mocha';

export function run(testsRoot: string): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'tdd',
    color: true,
    timeout: 10000,
  });

  return glob('**/**.test.js', { cwd: testsRoot, absolute: true })
    .then((files) => {
      // Add files to the test suite
      files.forEach((f) => {
        console.log('Found test file: ', f);
        mocha.addFile(f);
      });

      // Run the mocha test
      return new Promise<void>((resolve, rejects) => {
        mocha.run((failures) => {
          console.log(`Test run finished with "${failures}" failures`);
          if (failures > 0) {
            rejects(new Error(`${failures} tests failed.`));
          }
          resolve(undefined);
        });
      });
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
