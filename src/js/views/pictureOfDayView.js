//place all the document selector inside an object import the from base
import {elements} from './base';


//write a function that receives the result and render it to the user interface 
export const renderImage=(imageObj)=>{

    console.log(imageObj.media_type);

    let markup;
    if(imageObj.media_type==='image'){
        markup=`
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
        console.log(markup);
    }else{
        markup=`
        <iframe width="560" height="315" src="${imageObj.url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `

    elements.pictureOfDay.insertAdjacentHTML('beforeend',markup);
    }
}