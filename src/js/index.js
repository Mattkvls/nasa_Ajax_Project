import axios from 'axios';
async function getImageOfDay(){
    const key= CbSMLxCRncwtSTBVz87TluM0lnbX9Sd9tQY3ja5U;
    const result =await axios(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
    console.log(result);
}
getImageOfDay();

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// CbSMLxCRncwtSTBVz87TluM0lnbX9Sd9tQY3ja5U




