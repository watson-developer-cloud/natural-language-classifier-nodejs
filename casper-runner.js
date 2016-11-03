

const spawn = require('child_process').spawn;

require('dotenv').config({ silent: true });

const app = require('./app');
const port = 3000;

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port: %d', port);

  function kill(code) {
    server.close(() => {
      // eslint-disable-next-line no-process-exit
      process.exit(code);
    });
  }

  function runTests() {
    const casper = spawn('npm', ['run', 'test-integration']);
    casper.stdout.pipe(process.stdout);

    casper.on('error', (error) => {
      // eslint-disable-next-line no-console
      console.log(`ERROR: ${error}`);
      server.close(() => {
        process.exit(1);
      });
    });

    casper.on('close', kill);
  }

  runTests();
});
