// Require the main function from inquirer.js
const { main } = require('./src/inquirer.js');

// unhandledRejection event handler
process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
});


  
// Call the main function to start the application
main();


process.on('uncaughtException', (err, origin) => {
    console.error('There was an uncaught error', err);
  });
  
  process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  });
  
  