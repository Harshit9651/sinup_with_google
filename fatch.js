const axios = require('axios');
const xml2js = require('xml2js');

// async function checkDataFormat(data) {

//     try {
//         JSON.parse(data);
//         return 'JSON';
//     } catch (jsonError) {
      
//         try {
//             const parser = new xml2js.Parser();
//             await parser.parseStringPromise(data);
//             return 'XML';
//         } catch (xmlError) {
//             return 'Unknown format';
//         }
//     }
// }

// async function main() {
//     try {
//         const response = await axios.get('https://dummyjson.com/products');
//         const data = response.data;


//         const dataString = JSON.stringify(data);

//         const format = await checkDataFormat(dataString);
//         console.log(`Data format is: ${format}`);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }

  


// }

// main();


async function jsonOrxml(data){
    try{
        JSON.parse(data);
        return 'JSON'
    }catch(jsonError){
        try{
            const parser = new xml2js.parser();
            await parser.parseStringPromise(data);
            return'XML'
        
        }catch(xmlError){
            console.log({xmlError:"the error is dengeros "})
        }
           

    }

}
async function chackdata(){
    const apidata = await axios.get('https://freetestapi.com/api/v1/languages');
    const data = apidata.data;
    const datainstringformate = JSON.stringify(data);

  
   const format =  jsonOrxml(datainstringformate);
console.log(format)

    


}
chackdata();
