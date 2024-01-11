const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * Saves the given password to a file named 'passwords.txt'.
 *
 * @param {string} password - The password to be saved.
 */
const savePassword = (password) => {
  // Open the 'passwords.txt' file in append mode
  fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (error, fileId) => {
    if (error) {
      console.error('Error opening the file:', error);
      return;
    }

    // Write the password to the file followed by a newline (os.EOL)
    fs.write(fileId, password + os.EOL, null, 'utf-8', (writeError) => {
      if (writeError) {
        console.error('Error writing to the file:', writeError);
      }

      // Close the file after writing
      fs.close(fileId, (closeError) => {
        if (closeError) {
          console.error('Error closing the file:', closeError);
        } else {
          console.log('Password saved to passwords.txt');
        }
      });
    });
  });
};

// Export the savePassword function for external use
module.exports = savePassword;
