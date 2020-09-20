This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# ReactFlix #

Netflix FrontEnd Clone that leverages the concept of React Hooks and uses th TMDb API to fetch data.    
The app is broken down into 5 components:
- **App Body:** The body of the app that contains all other components as children.
- **Navbar:** The navbar of the app that contaisn teh app logo and user avatar. (no functionality)
- **Banner:** Displays a randomly picked picked movie from the Trending Now list in a large banner format
- **Rows:** Seperates the page into categories: Trending,Action,Comedy,etc.. and each row has its own unique key and fetchUrl from where it fetches its movies
- **RowItems:** The actual individual movies in each row,that have an unique key and image attribute.

[Reference](https://www.youtube.com/watch?v=XtMThy8QKqU)
