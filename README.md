# Documentation

## Purpose of the Application
The purpose of this application is to serve as a portfolio website, showcasing the developer's skills, projects, and experiences. It provides visitors with information about the developer's background, resume, and contact details. Additionally, it highlights various projects undertaken by the developer, allowing visitors to explore and learn more about them.

## How to Contribute to the Development
Contributions to the development of this application are welcome! If you find any bugs, have suggestions for improvement, or would like to contribute new features, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the code is well-documented and follows the project's coding standards.
4. Test your changes thoroughly.
5. Submit a pull request, explaining the purpose of your changes and any relevant details.

## List of Features
- Home Page: Introduction and welcome message.
- Resume Page: Display of the developer's resume and skills.
- Portfolio Page: Showcase of projects undertaken by the developer.
- About Page: Information about the developer, including contact details and social media links.
- Header and Footer Components: Navigation and footer elements present across all pages.
- Search Bar Component: Allows users to search for specific content within the portfolio.

## Dependencies and Installation
To install and run the application locally, ensure you have the following dependencies installed:

- Boostrap: Using bootstrap as the style of the navigation bar
- React Icons: Provides a library of icons for use in React applications.
- Axios: A promise-based HTTP client for making requests to external APIs.
- Material-UI: A popular React UI framework for building responsive and customizable user interfaces.

You can install these dependencies using npm:

'npm install react-icons axios @mui/material @emotion/react @emotion/styled'

After installing the dependencies, follow these steps to run the application:

1. Clone the repository: `git clone https://github.com/PendaZz/Portfolio.git`
2. Navigate to the project directory: `cd Portfolio`
3. Install dependencies: 
`npm install`
`npm install bootstrap react-icons axios @mui/material @emotion/react @emotion/styled`
4. Create a `.env` file in the root directory and add your API access tokens:

REACT_APP_GITHUB_ACCESS_TOKEN=your_github_access_token
REACT_APP_FACEBOOK_ACCESS_TOKEN=your_facebook_access_token

5. Start the development server: `npm start`
6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

Make sure to provide your actual API access tokens in the `.env` file. If you encounter any issues during installation or running the application, refer to the troubleshooting section in the README or open an issue on GitHub for assistance.

## Application Architecture
This application is built using React.js, a popular JavaScript library for building user interfaces. It follows a component-based architecture, where different parts of the UI are broken down into reusable components. The application uses React Router for navigation between different pages and Axios for making HTTP requests to external APIs.

## Reporting Issues
If you encounter any issues or have suggestions for improvement, please report them by opening an issue on GitHub. Be sure to include relevant details such as steps to reproduce the issue and your environment (e.g., operating system, browser version).

