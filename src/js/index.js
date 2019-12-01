import '../styles/app.css';
import Picture from './models/PictureOfDay';
import Asteroids from './models/Asteroids';
import MarsWeather from './models/MarsWeather';
import Search from './models/SearchNasaLi';
import * as pictureView from './views/pictureOfDayView';
import * as asteroidView from './views/asteroidsView';
import * as mWeather from './views/marsWeatherView';

import 'bootstrap';




/*Global state of the app 
*-picture object
*-asteroids object
*-marsWeather object
*-Search object images
*/
const state={};

const  controlPicture=async ()=>{
    //create the picture object in the state
    state.picture=new Picture();

    //get the image of the day  save it to the state
    await state.picture.getImageOfDay();
    

    //render the image of the day at the UI
    pictureView.renderImage(state.picture.result);
    
}
controlPicture();




const controlAsteroids=async ()=>{
    //create the asteroids object in  the state
    state.asteroidsNear=new Asteroids();

    //get the data and save  them to the state  as asteroids
    await state.asteroidsNear.getAsteroids();
    
    //display the  data to the ui
    //convert the object to array /*the state.asteroidsNear.asteroids is an object which has two arrays today, tomorrow's */
    const asteroidsArray=Object.keys(state.asteroidsNear.asteroids).map(function(key){return state.asteroidsNear.asteroids[key]});
    // console.log(asteroidsArray[0]);

    //render the today's array
    asteroidView.renderAsteroids(asteroidsArray[0]);
}
controlAsteroids();


const controlMarsWeather= async()=>{
    //create the marsWeather object
    state.marsWeather=new MarsWeather();
    await state.marsWeather.getMarsWeather();

    // console.log(typeof(state.marsWeather.marsWeatData));
    // console.log(state.marsWeather.marsWeatData.data);

    //save the object to a variable 
    const obj=state.marsWeather.marsWeatData.data;

    //render the weather
    mWeather.renderMarsWeather(obj);
}
controlMarsWeather();





const controlSearchLi= async()=>{
    //create the new search object 
    state.searchObject=new Search('apolo');

    //get the data 
    await state.searchObject.getResults();

    //render the results to ui 
    

    //clean the search box for the next search 





/*
    * get the input from ui 
    * get the data for the query from the nasa api 
    * display the data to ui 
    * clean the form for the next search 
    * clean the ui when event click at the search box 
    * */
}
controlSearchLi();