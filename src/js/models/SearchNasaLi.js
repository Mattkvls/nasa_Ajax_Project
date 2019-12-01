import axios from "axios";


//https://images-api.nasa.gov/
//CbSMLxCRncwtSTBVz87TluM0lnbX9Sd9tQY3ja5U

export default class Search{
    constructor(query){
        this.query=query;
    }

    async getResults(){
        try{
            const data=await axios(`https://images-api.nasa.gov/search?&q=${this.query}`);
            console.log(data.data.collection.items);
            //αυτο ειναι ενα array απο objects για το καθε object -> θελουμε το data , links 
        }catch(error){
            console.log(error);
        }
    }

}

