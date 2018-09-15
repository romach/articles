#!/usr/bin/env bash
# Prerequisites: nodejs

# Install Karma CLI
npm install -g karma-cli

# Install Karma
npm install karma --save-dev
npm install karma-jasmine karma-chrome-launcher --save-dev

# Initialize Karma
karma init

# Run Karma
karma start --single-run path/to/karma.conf.js