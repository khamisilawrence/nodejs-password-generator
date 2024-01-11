# PassGen: A CLI Password Generator

Command line application that generates passwords.

## Summary

PassGen is a command-line tool written in Node.js that allows users to generate random passwords based on specified criteria. PassGen provides options for controlling the length of the password and whether to include numbers and symbols. Additionally, it offers the option to save generated passwords to a file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Installation

1. Ensure you have Node.js installed on your machine.

   ```bash
     node -v
   ```

   If not, [install Node.js](https://nodejs.org/en/download/).

2. Clone the repository to your local machine:

   ```bash
    git clone https://github.com/khamisilawrence/nodejs-password-generator.git
   ```

3. Navigate to repository:

   ```bash
    cd nodejs-password-generator
   ```

4. Install dependencies:

   ```bash
    npm install
   ```

## Usage

To generate a password, use the following command:

```bash
  passgen -l <length> -s -nn -ns
```

Replace <length> with the desired password length.

Example:

```bash
passgen -l 12 -s
```

This generates a password of length 12 with symbols and saves it to 'passwords.txt'.

### Options

| Short | Long              | Description                                                    |
| ----- | ----------------- | -------------------------------------------------------------- |
| -l    | --length <number> | Specifies the length of the generated password (default is 8). |
| -s    | --save            | Saves the generated password to 'passwords.txt'.               |
| -nn   | --no-numbers      | Excludes numbers from the generated password.                  |
| -ns   | --no-symbols      | Excludes symbols from the generated password.                  |
| -h    | --help            | Display help for the command.                                  |
| -V    | --version         | Show the version.                                              |

## File Structure

- `./utils/createPassword.js`: Module for generating random passwords.
- `./utils/savePassword.js`: Module for saving passwords to 'passwords.txt'.
- `./index.js`: CLI tool script that utilizes the above modules.

## Security Considerations

- The 'passwords.txt' file is intended for personal use only and is not encrypted by default. Avoid sharing it publicly or with unauthorized individuals.
- If you require enhanced security, consider implementing encryption or using a dedicated password manager.

## Contributing

Contributions are welcome! Please follow the [Contribution Guidelines](./CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](./LICENSE).

## Credits

- This project was completed as practice following guidance provided by a 30-minute [YouTube tutorial](https://youtu.be/3Xx83JAktXk) uploaded by [Traversy Media](https://www.youtube.com/@TraversyMedia/) on the 5th of July 2021, titled “Build a Node.js Password Generator”.
- This project was inspired by [Brad Traversy's passgen Github repository](https://github.com/bradtraversy/passgen).
