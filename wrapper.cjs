
const { Select } = require('enquirer');
const { exec } = require('node:child_process');
const fs = require('node:fs');

const timeout = 5000;
const path = './exercises';

const choices = fs.readdirSync(path);
const prompt = new Select({
  name: 'run test',
  message: 'Which spec should I run',
  choices: choices
});

prompt.run().then(answer => {
  exec(`npx mocha ${path}/${answer}`, {timeout: timeout}, (err, stdout, stderr) => {
    if (err) {
      if (err.killed) {
        console.log(`Spec took longer than ${timeout} milliseconds and process was killed. Check your code for infinite loops and try again.`);
      } else {
        console.error(`Some tests failed: ${err}`);
      }
    }

    if (stdout) console.log(`stdout: ${stdout}`);
    if (stderr) console.error(`stderr: ${stderr}`);
  });
});
