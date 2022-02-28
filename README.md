# ReactFlix #

Netflix FrontEnd Clone that leverages the concept of React Hooks and uses th TMDb API to fetch data.    

![Re](https://i.ibb.co/6W01F64/flix.png)

The app is broken down into 5 components:
- **App Body:** The body of the app that contains all other components as children.
- **Navbar:** The navbar of the app that contaisn teh app logo and user avatar. (no functionality)
- **Banner:** Displays a randomly picked picked movie from the Trending Now list in a large banner format
- **Rows:** Seperates the page into categories: Trending,Action,Comedy,etc.. and each row has its own unique key and fetchUrl from where it fetches its movies
- **RowItems:** The actual individual movies in each row,that have an unique key and image attribute.

[Reference](https://www.youtube.com/watch?v=XtMThy8QKqU)
