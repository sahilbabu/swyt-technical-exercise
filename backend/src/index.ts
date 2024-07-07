/* Export the app for testing
 *
 * The server starts multiple times during testing. TO fix PORT is already in use
 * ------------------------- */
import app from './app';
import config from './config/config';

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
