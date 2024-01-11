#!/usr/bin/env node
const program = require('commander');

const log = console.log;
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

/**
 * CLI tool for generating and optionally saving passwords.
 */
program
  .version('1.0.0')
  .description('Simple Password Generator');

// Define command-line options
program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

// Extract options from the parsed program
const { length, save, numbers, symbols } = program.opts();

// Generate password based on specified options
const generatedPassword = createPassword(length, !numbers, !symbols);

// Save password to file if the save option is specified
if (save) {
  savePassword(generatedPassword);
}

// Output the generated password
log('Generated Password: ' + generatedPassword);
