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
            this.results=data.data.collection.items;
            console.log(`this is the data from the server for the query ${this.results}`);
            console.log(this.results);
        }catch(error){
            console.log(error);
        }
    }

}

