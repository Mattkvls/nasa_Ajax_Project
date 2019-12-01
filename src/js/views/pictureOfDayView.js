//place all the document selector inside an object import the from base
import {elements} from './base';


//write a function that receives the result and render it to the user interface 
export const renderImage=(imageObj)=>{
    const markup=`
    <div>
        <figure>
        <img src="${imageObj.hdurl}" alt="picture of the day"
        </figure>
        <h4> ${imageObj.title}</h4>
        <p>${imageObj.explanation}</p>
        <p>copyright:${imageObj.copyright}</p>
    </div>
    `;

    //add it to the html
    elements.pictureOfDay.insertAdjacentHTML('beforeend',markup);
}