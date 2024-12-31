
# Type Effect Project

This project implements a typing effect on a webpage. It simulates the effect of typing out various words dynamically and erasing them to display the next word in the list. This effect is commonly seen in websites that want to display multiple keywords or features with an interactive text animation.

## Project Structure

The project consists of the following files:

1. **index.html**: The main HTML structure of the page.
2. **style.css**: The styles that define the layout and appearance of the webpage.
3. **script.js**: The JavaScript that controls the typing and erasing effect.
4. **img/frezcode.jpg**: An image used in the logo section.

## Features

- **Typing Effect**: Displays an array of words (e.g., "Website", "Web App", "Mobile App", etc.) one letter at a time with a blinking cursor.
- **Erasing Effect**: Once a word is completely typed, it is erased letter by letter before moving on to the next word.
- **Responsive Design**: The page adapts to smaller screen sizes (e.g., mobile and tablet).

## How to Use

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser to see the typing effect in action.
3. You can modify the `textArray` in `script.js` to change the words being typed.

## Files Description

### index.html

This file contains the structure of the webpage, including:

- A navigation bar with a logo and project name.
- A section that displays the typing effect text.
- A footer with a link to the project creator's GitHub profile.

### style.css

This file defines the CSS rules for:

- The layout of the navigation bar, section, and footer.
- The font styles, colors, and general appearance of the page.
- The typing cursor animation.

### script.js

This file contains the logic for the typing and erasing effects. The `type()` and `erase()` functions handle the typing of each word in the `textArray` and the erasing animation.

### img/frezcode.jpg

An image file used in the navigation bar's logo section.

## How It Works

1. **Typing**: The `type()` function types each word from the `textArray` one character at a time. Once a word is fully typed, the `erase()` function is triggered to erase it.
2. **Erasing**: The `erase()` function removes characters one at a time and then moves to the next word in the array.
3. **Cursor Animation**: A blinking cursor is simulated using CSS animations.

## Customization

- You can modify the `textArray` in `script.js` to display different words or phrases.
- The typing speed can be adjusted by changing the `typingDelay` and `ErasingDelay` variables in `script.js`.
- The colors and layout can be easily customized by modifying the `style.css` file.

## Demo

To see the effect in action, visit [Frezcode](http://github.com/Diospace) or open the project locally.

