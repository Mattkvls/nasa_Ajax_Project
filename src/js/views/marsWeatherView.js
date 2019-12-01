import {elements} from './base';

//create a function to render the results 

//add the day to the valuesArray
//array δεδομενων κανει loop κ προσθετει την ημερα απο αλλο array . 
//αποτελεσμα νεο array που θα κανουμε πασα στο marsWeaMark

const addSolDay=(arr,arr2)=>{
        arr.forEach((el,index)=>{
            el.solName=arr2[index];
        })
}


const marsWeaMark=(element)=>{
    const markup=`
<li>
    <h4>${element.solName} sol_date</h4>
    <p>The average temperature is: ${element.AT.av } °F </p>
    <p>The average Pressure is: ${element.PRE.av} Pa </p>
</li>`;

elements.marsWeather.insertAdjacentHTML("beforeend",markup);
}

export const renderMarsWeather=(obj)=>{
    //create and slice the array with only the values of the solDays from the object we got back
    const solValues=Object.keys(obj).slice(0,7).map((el)=>{ return obj[el]});

    //the solnames to an array
    const daysArr=Object.keys(obj).slice(7,8).map((el)=>{ return obj[el]});
    // console.log(daysArr);

    //destructure the daysArr is an array inside an array
    const [daysArrConv]=daysArr;
  
    //add the soldays to the solValues array
    addSolDay(solValues,daysArrConv);

    // console.log(solValues);
    //loop throught and print them
    solValues.forEach(marsWeaMark);
}