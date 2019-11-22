import Picture from './models/PictureOfDay';
import Asteroids from './models/Asteroids';
import * as pictureView from './views/pictureOfDayView';
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
    state.asteroids=new Asteroids();
    await state.asteroids.getAsteroids();
}
controlAsteroids();