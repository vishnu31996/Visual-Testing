# Visual Testing with Cypress and cypress-image-snapshot

This project demonstrates how to perform visual testing using Cypress and cypress-image-snapshot plugin.

## Prerequisites

To run this project, you need to have Node.js and npm installed on your machine. You can download and install them from the official Node.js website: https://nodejs.org.

## Installation

1. Clone this repository to your local machine using the following command: 
    git clone git@github.com:vishnu31996/visual-testing.git

2. Install the required dependencies by running the following command in the project directory:

    `npm install`


## Usage

1. To run the tests, use the following command in the project directory:

    `npm run cypress:open`

This command will run the tests and generate screenshots for visual testing. First time it generates the base screenshots. Then from next time it compares the screenshot

## Custom Commands

The file cypress/support/commands.js contains custom Cypress commands that can be used in the tests. In this project, there is a custom command hideHomeElements() that hides certain elements on the page before taking a screenshot. You can modify this command to hide other elements that may interfere with the visual tests.

## Conclusion
This project provides a basic implementation of visual testing using Cypress and the cypress-image-snapshot plugin.



