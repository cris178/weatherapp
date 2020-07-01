## Dripp Weather

Dripp Weather: https://drippweather.firebaseapp.com

This web app is built using React as a starter project. Using the commands listed below you can run the application
locally if the site hasn't been deployed yet.

The web app is pretty straight foward, you enter your city and you get the weather data for the next 5 days.
The weather data is provided by the OpenWeather website with some limitations on the provided data.
Unfortunately their is no single day temperature provided and instead offers the temperature of each day
in three hour periods. Thus in order to get a viable temperature I just took the max and min temperatures in a
24hour period.

## Initial React Impressions

While I was initally confused with how alot of the React details worked I've come to better understand some of the common pitfalls.
Some issues I encountered were knowing when and where to update state, how to pass state data to and from parent and child components, Fixing [Mixed Content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/fixing-mixed-content) " issues and how to work with API's. It was a little frustrating and the app is still not the best thing ever but it was fun.

## Known Issues

The app will crash when providing a non existant city.

Image not set for all weather cases.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
