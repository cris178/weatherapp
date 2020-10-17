## Dripp Weather

![Imgur](https://i.imgur.com/XcqPbuO.png)

[Dripp Weather](https://drippweather.firebaseapp.com)

This is one of my first React projects. It's a simple weather app that highlights the max and mins in a 5 day week. Because of the limitations of the free Open Weather API it only retrieves data in a 24 hour period and not specific times. That being said, the app is still pretty decent. Just type the city you're in and you'll see your local weather info. 

The app is also responsive so if you want to try it on your phone the bootstrap should be able to handle that view.

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
