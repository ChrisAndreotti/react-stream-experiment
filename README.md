This is a react-redux demo site that allows a user to create their own streaming video channels. 

Each user can create unlimited channels/streams that they can stream to. This is a different model from how [twitch.tv](https://www.twitch.tv/) works, in that users can create any number of channels for streaming.

The application demonstrates the following key areas of technical interest:

* Use of [React-Redux](https://github.com/reduxjs/react-redux) for managing application state
* Managing user input and handling validation with [Redux-Form](https://redux-form.com/)
* Configuring navigation and browser history in a single-page-application context using [react-router-dom](https://www.npmjs.com/package/react-router-dom), specifically with the BrowserRouter component
* Authentication with [Google API](https://developers.google.com/api-client-library/javascript/reference/referencedocs) and their [OAuth 2.0 Library](https://developers.google.com/api-client-library/javascript/reference/referencedocs#authentication)
* [Semantic UI](https://semantic-ui.com/) for CSS and component styling

This project relies on [Google's API Client Library](https://developers.google.com/api-client-library/javascript/reference/referencedocs) to implement OAuth-based authentication. To use this app, you must supply your own OAuth Client Id (I do not provide my own). Below are the steps to set up a Client Id:

1. Register an account at console.developers.google.com and [create a new project](https://console.developers.google.com) 
2. Create a new OAuth Client ID and Client Secret in the Credentials section of your project. This app will use the Client Id to make requests to the Google OAuth API.
3. Copy the .env file in the root of this project, rename it to .env.local, and set the value of REACT_APP_GOOGLE_OAUTH_CLIENT_ID to your OAuth Client Id.
4. In the terminal, from within the `client/src` folder of the project, run `npm start` to start the application

All content and instructions came from the excellent [Udemy Modern React with Redux course](https://www.udemy.com/react-redux/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the `client/src` folder of the project, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
