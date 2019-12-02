import {elements} from './base';

export const getInput=()=>{
    return elements.searchInput.value;
};

// //create a function that will render the markup 
// const renderMarkupResult=(obj)=>{
//     let markup;
//     if(obj[index].data[0].media_type==='image'){
//         markup=`
//     <li>
//         <p>${obj[index].data[0].title} link is ${obj[index].links[0].href}and the description is ${obj[index].data[0].description} the location is ${obj[index].data[0].location} and the photographer is ${obj[index].photographer}</p>
//         <p>link is ${obj[index].links[0].href}</p>
//     </li>
//     `

//     /*δεν κανει καθε ενα onject απο το array θελει να εχει το index του για να δουλεψει το παραπανω */
//     }
    
//     elements.searchResults.insertAdjacentHTML('beforeend',markup);
// }
//create a function that will loop throught the array of objects and render the mark up for each element 
export const renderResults=(arrObjects)=>{/*data.data.collection.items[0]*/
    arrObjects.forEach((el,index)=> {(el,index)=>{
        let markup;
         if(obj[index].data[0].media_type==='image'){
        markup=`
            <li>
                <p>${obj[index].data[0].title} link is ${obj[index].links[0].href}and the description is ${obj[index].data[0].description} the location is ${obj[index].data[0].location} and the photographer is ${obj[index].photographer}</p>
                <p>link is ${obj[index].links[0].href}</p>
            </li>
            `

         /*δεν κανει καθε ενα onject απο το array θελει να εχει το index του για να δουλεψει το παραπανω */
         }
    
         elements.searchResults.insertAdjacentHTML('beforeend',markup);
    }})
};
