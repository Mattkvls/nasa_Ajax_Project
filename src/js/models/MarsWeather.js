import axios from 'axios';

//need a class to create an object to save inside the data that 
//we will get from the method that will be inside 

export default class MarsWeather{
    constructor(){}
    async getMarsWeather(){
        try{
            const marsData=await axios(`https://api.nasa.gov/insight_weather/?api_key=CbSMLxCRncwtSTBVz87TluM0lnbX9Sd9tQY3ja5U&feedtype=json&ver=1.0`);
            this.marsWeatData=marsData;
        }catch(error){
            console.log(error);
        }
    }
}
