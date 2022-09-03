// const BAICE_API ="https://my-json-server.typicode.com/DanielGedamo/techer-json/db"
// export const getTecher = async ()=>{
//     try{
//         return await fetch (BAICE_API).then(res => (res).json())
//     }
//     catch(error){
//         console.log(error);
//     }
// }


export default async function getTecher (){
    try{
    return await fetch("https://my-json-server.typicode.com/DanielGedamo/techer-json/db").then(response=>response.json())
}
catch(error){
    console.log(error);
}
};