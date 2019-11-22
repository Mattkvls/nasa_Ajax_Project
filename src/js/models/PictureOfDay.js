import axios from 'axios';

//describe data model for the pictureOfDay
//crete a new object with the results of the ajax call
export default class Picture{
    constructor(){}

    // async method of this class
    async getImageOfDay(){
        try{
            const res=await axios(`https://api.nasa.gov/planetary/apod?api_key=CbSMLxCRncwtSTBVz87TluM0lnbX9Sd9tQY3ja5U`);

        //api_key=CbSMLxCRncwtSTBVz87TluM0lnbX9Sd9tQY3ja5U
        //save the data to the object as result
        this.result=res.data;
        // console.log(res.data);

        }catch(error){
            alert(error);
        }     
    }
}