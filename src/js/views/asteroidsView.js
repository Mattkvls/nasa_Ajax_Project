import{elements} from './base';

const asteroidsMark=(element)=>{
    const markup=`
    <div class="asteroid-item">
        <h5>Name: ${element.name.replace(/[()]/g, "")}</h5>
        <p>est diam:${Math.round((element.estimated_diameter.meters.estimated_diameter_max)*100)/100} -${Math.round((element.estimated_diameter.meters.estimated_diameter_min) * 100) / 100} m</p>
        ${element.is_potentially_hazardous_asteroid?`potenially hazardous`:`not hazardous`}
    <div>
    `
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