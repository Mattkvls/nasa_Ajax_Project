import{elements} from './base';

const asteroidsMark=(element)=>{
    const markup=`
    <li>
        <h4>The name of the asteroid is: ${element.name}</h4>
        <p>The estimated diameter is:</p>
        <p>max: ${element.estimated_diameter.kilometers.estimated_diameter_max} km</p>
        <p>min: ${element.estimated_diameter.kilometers.estimated_diameter_min} km</p>
        <p>Is potentially  hazardous : ${element.is_potentially_hazardous_asteroid}</p>
    </li>
    `;
    elements.asteroidsClose.insertAdjacentHTML("beforeend",markup);
}
//write a function that receives the data  and loop through the array 
//a function that renders them 
export const renderAsteroids=(arr)=>{
    try{
        arr.forEach(asteroidsMark);
    }catch(error){
        console.log(error);
    }
}