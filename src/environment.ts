import fs from 'fs';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.  Variable expansion is supported in .env files.
// https://github.com/motdotla/dotenv
// https://github.com/motdotla/dotenv-expand
// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
[
    `.env.${process.env.NODE_ENV}.local`,
    `.env.${process.env.NODE_ENV}`,
    '.env',
]
    .filter(Boolean)
    .forEach((dotenvFile) => {
        if (fs.existsSync(dotenvFile)) {
            dotenvExpand(dotenv.config({
                path: dotenvFile,
            }));
        }
    });
