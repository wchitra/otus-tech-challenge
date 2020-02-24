/**
 * 
 * This is where the application gets loaded and server starts.
 *
 */
const app = require('./app');

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
