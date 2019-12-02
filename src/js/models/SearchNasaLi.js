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
            // console.log(data.data.collection.items);
            // //αυτο ειναι ενα array απο objects για το καθε object -> θελουμε το data , links 
            // console.log(data.data.collection.items[0].data[0].title);
            // console.log(data.data.collection.items[0].data[0].photographer);
            // console.log(data.data.collection.items[0].data[0].description);
            // console.log(data.data.collection.items[0].data[0].location);
            // console.log(data.data.collection.items[0].links[0].href);
            this.results=data.data.collection.items;
        }catch(error){
            console.log(error);
        }
    }

}

