import axios from 'axios';

//create a function that will get the data from the nasa 
//make a class to create anobject then save the data inside 


export default class Asteroids{
    constructor(){}

    async getAsteroids(){
        try{
        //start_day will be the today
        //end_day will be after 7 days
        const day=new Date().getDate();
        const month=new Date().getMonth();
        const year=new Date().getFullYear();
        
        const startDay=`${year}-${month}-${day}`;
        
        const endDay=`${year}-${month}-${day+1}`;
       
        const aster= await axios(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDay}&end_date=${endDay}&api_key=CbSMLxCRncwtSTBVz87TluM0lnbX9Sd9tQY3ja5U`);
       
        this.asteroids=aster.data.near_earth_objects;

        }catch(error){
            console.log(error);
        }
    }
}


