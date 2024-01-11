/**
 * Generates a random password based on specified criteria.
 *
 * @param {number} length - The length of the password (default is 8).
 * @param {boolean} hasNumbers - Flag indicating whether to include numbers in the password (default is true).
 * @param {boolean} hasSymbols - Flag indicating whether to include symbols in the password (default is true).
 * @returns {string} - The generated password.
 */
const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  // Define character sets
  const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*_-+=';

  // Initialize characters with alphabets
  let chars = alpha;

  // Append numbers if hasNumbers is true
  hasNumbers ? (chars += numbers) : '';

  // Append symbols if hasSymbols is true
  hasSymbols ? (chars += symbols) : '';

  // Generate and return password
  return generatePassword(length, chars);
};

/**
 * Generates a random password based on the given character set and length.
 *
 * @param {number} length - The length of the password.
 * @param {string} chars - The set of characters to use for password generation.
 * @returns {string} - The generated password.
 */
const generatePassword = (length, chars) => {
  let password = '';

  // Generate each character of the password randomly from the character set
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
};

// Export the createPassword function for external use
module.exports = createPassword;
