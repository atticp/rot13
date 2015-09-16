# Rot13
Rot13 is an angularJS app for encoding/decoding ROT13 strings

# Running Locally

Get the repo

    $ git clone https://github.com/atticp/rot13
    $ cd rot13

Install dependencies

    $ npm install -g gulp karma-cli
    $ npm install

Run the test suite

    $ npm test

Alternatively run just one of the test components

    $ jshint .
    $ karma start

Open `build/release/index.html` in a browser to encode/decode ROT13 strings

# Project Structure

```
│
├── LICENSE                   MIT
├── README.md                 this file
├── bower.json                defines third-party css/js - downloads to /assets
├── gulpfile.js               defines gulp tasks
├── karma.conf.js             karma test config
├── package.json              npm dependencies and scripts
│
├── assets/                   bower components (not intended to be committed)
│
├── build/                    build and test output files
│   ├── coverage/               code coverage html
│   └── release/                release build output
│
├── layout/                   main page and layout files
│   ├── index.html              main template
│   └─── css/                    css files
│        └── main.css              main css file
│
├── src/                      angular files
│   └── rot13/                  rot13 directives, controller and service
│
└── test/
    └── unit/                  unit/karma tests
```