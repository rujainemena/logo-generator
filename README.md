# SVG Logo Generator

## Description

This project allows the user to generate a simple logo based off a series of questions from the command line. 

![walkthrough-video](/examples/images/walkthrough-video.gif)

To learn about the usage of the application, visit the User Story and Acceptance Criteria.

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation

Node.js is needed to run this application.

## Usage

When using this application, it will generate a simple logo according to the answers provided to the questions. 
The application will ask you to choose up to 3 characters, a shape of preference, and cordinating colors for both the text and shape.

![black-and-white-logo](/examples/images/black-circle.png)
![black-and-pink-logo](/examples/images/pink-square.png)
![yellow-logo](/examples/images/yellow-triangle.png)

## Credits

Thank you to my profressor Phil who gave thorough instructions for this project. 

## License

MIT License


## Tests
Used [Jest](https://www.npmjs.com/package/jest) for running the unit tests.