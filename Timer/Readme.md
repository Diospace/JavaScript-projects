
# Timer Project

## Overview

This project is a simple web-based timer application that displays the current date and time with milliseconds in real-time. The application is styled with modern CSS and features a responsive layout. It is built using HTML, CSS, and JavaScript.

## Features

- Displays the current date in the format: `Year::Month::Day`.
- Displays the current time in the format: `Hours::Minutes::Seconds::Milliseconds`.
- Responsive design for compatibility with different screen sizes.
- Aesthetic user interface with customizable colors.
- Footer with a clickable link to the developer's GitHub profile.

## Technologies Used

- **HTML5**: For the structure of the webpage.
- **CSS3**: For styling and responsive design.
- **JavaScript**: For the functionality of the timer.

## File Structure

. ├── index.html    # Main HTML file ├── style.css     # CSS for styling the application ├── script.js     # JavaScript file for the timer functionality └── img/ └── frezcode.jpg  # Logo image used in the navigation bar

## How It Works

1. The JavaScript function `Timer` is executed once the DOM is fully loaded.
2. `Timer` uses `setInterval` to update the date and time every 100ms.
3. The current date and time are fetched using the `Date` object and displayed in specified `span` elements in the HTML.
4. The page is styled using CSS variables for a consistent and customizable design.

## Usage

1. Clone the repository or copy the project files to your local environment.
2. Make sure all files (HTML, CSS, JS, and the `img` folder) are in the same directory.
3. Open `index.html` in a browser to view the application.

## Responsive Design

The project includes responsive styles:
- Adjusts the layout for screens smaller than 700px.
- Reduces font size for smaller screens to ensure readability.

## Developer

- **Name**: Frezcode
- **GitHub**: [Frezcode](http://github.com/Diospace)

## Screenshots

### Desktop View
![Desktop View](./img/frezcode.jpg)

### Mobile View
Adjusts layout to fit smaller screens.

## License

This project is open-source and available under the MIT License.

## Credits

- The logo used in the project: `frezcode.jpg`
- Designed and developed by Frezcode.
