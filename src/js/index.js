import Picture from './models/PictureOfDay';
import Asteroids from './models/Asteroids';
import * as pictureView from './views/pictureOfDayView';
import * as asteroidView from './views/asteroidsView';
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
    const day=new Date().getDate();
    const month=new Date().getMonth();
    const year=new Date().getFullYear();  
    const startDay=`${year}-${month}-${day}`;

    const todayArr=state.asteroidsNear.asteroids[startDay];

    asteroidView.renderAsteroids(todayArr);
}
controlAsteroids();