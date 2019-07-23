This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Shopping Cart

## Getting started
 
The app was built using `node v8.11.4` and `yarn v1.17.3`. I run `git v2.7.4` at time of writing. To kick off the app, do the following:
- Clone the repository: `git clone https://github.com/trevithj/shoppingCart.git`
- Install dependencies: `cd shoppingCart && yarn`
- Start the web server: `yarn run start`

## The App

The shopping cart app consists of two main panels, and a pretty spinning icon in the header bar. The latter came out of the box, so I left it in. To the panels:
Both panels are somewhat reactive, taking up a little under half teh available screen width. So the app should be workable even on small mobile devices.

### Products panel

The left panel is the list of the products in the hardware store. This is driven off a static collection imported directly into the app. Ideally it would be fetched from a `.json` file, so that the fetch can be easily replaced with a call to a back-end source. I didn't do this simply because it was easier in teh dev cycle to get the list running first, and then make decisions around the overall display after I saw what the list looked like on screen.
Clicking on the `Add to cart` button puts one item into the user's cart.

### Shopping Cart panel

The right panel lists details and quantities of items currently in the user's cart. It also shows line totals for each item, and the total order price at the bottom of the panel. 
Clicking on the `Remove` button will remove all instances of that item, regardless of quantity.

## The Architecture

The app uses local state in the `App` component to control re-rendering. This is done only by use of the `totalCost` property, which is sufficient for this purpose since it gets recalculated on every change of the cart items, and is pretty much guaranteed to produce a different value from the immediately previous time.
An obvious enhancement would be to put the full `products` list and the `cart` contents into state also. For this, `redux` would seem to make most sense, since we could use thunks to control the saving/loading of either data structures from persistant data sources. I decided against this approach here, simply because the default app structure didn't come with redux, and because I wanted to trial using hooks for this purpose.
Another enhancement would be to reduce the number of times the `cart` contents get read. At present, this happens each time App is rendered. This could be done by making App a class and adding initialization in the constructor, but then would need refactoring of the state hook. Alternative would be to use an effect hook, or a custom hook.

# Original React App notes

## Available Scripts

In the project directory, you can run:

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
