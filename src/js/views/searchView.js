import {elements} from './base';

//searchResults
//create a function that will render the markup 
const renderMarkupResult=(obj)=>{
    const markup=`
    <li>
        <p>${obj[0].data[0].title}</p>
        <p>link is ${obj[0].links[0].href}</p>
        <p>${obj[0].data[0].description}</p>
        <p>${obj[0].data[0].location}</p>
        <p>${obj[0].photographer}</p>
    </li>
    `
    /*
            console.log(data.data.collection.items[0].data[0].title);
            console.log(data.data.collection.items[0].data[0].photographer);
            console.log(data.data.collection.items[0].data[0].description);
            console.log(data.data.collection.items[0].data[0].location);
            console.log(data.data.collection.items[0].links[0].href);*/
    searchResults.insertAdjacentHTML('beforeend',markup);
}
//create a function that will loop throught the array of objects and render the mark up for each element 
export const renderResults=(arrObjects)=>{/*data.data.collection.items[0].links[0].href*/
    arrObjects.forEach(()=> {renderMarkupResult});
}
