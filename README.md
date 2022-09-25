# Intro

This application reprensents a movies collection app it was created on top of latest react version

# Screenshot

![sss](https://user-images.githubusercontent.com/16271638/192155950-77b783bb-af1d-455e-83d3-9c89b8702eb6.gif)

### Start project locally

run `npm install` than run `npm start`

### Run tests 

run `npm run test` 

### Idea about project

I did this application with create-react-app (typescript template) , I did use tailwind as design library for my components
the entry point of the app is App.tsx file It gonna sets the layout and shows the MainComponent that handles movies fetching from json file 

folders are like so :

- components : where i did put app components
- dummyData : movies data used for test
- hooks : contain one hook useDebounce that I did use in search bar to enhance search performance 
- layout : contain components that defines application layout
- models : some typescript models
- redux store : where I did put the definition of redux store along with selectors and moviesSlice
- routes : where i did define react routes with react router
- services : contain function that fetchs json data 
- theme : where I did import tailwind stuff and set some custom styles

### Idea about unit tests
I did put 4 tests in App.test.tsx :
- Test that checks if loading is shown firstly
- Test fetching movies result in correct number of links
- Test Redux store is filled with data
- Test click link open movie details page
