import React, { createContext,useState } from 'react';
import axios from 'axios'

 export  const Appcontext = createContext();

export default function AppcontextProvider({children}){
    const [loading,setloading] = useState(false);
    const [articles,setarticles] = useState([]);
    const[theme,settheme] = useState(true);
    const[topic,settopic] = useState([]);
    const[page,setpage] = useState(1);
    const[searcharticles,setsearcharticles] = useState([]);
    const[Source,setSource] = useState([]);
   const [status,setstatus]  = useState(true);
   const[URL,setURL] = useState(true);
     const[country,setcountry] = useState();
    const api_key = '5272542a11f74749abffda7d835b7aa6'

    async function fetchdata(){
        setloading(true);
        const url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`;
        try{
        const response = await axios.get(url);
        console.log(response);
        const data = response.data.articles;
        setarticles(data);
        console.log(data);
        }
        catch(error){
            console.log("got an error ");
            console.log(error);
        }
        setloading(false);
    };

    async function fetchdata_search(topic){
        setloading(true);
const Url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${api_key}`
try{
    const data = await axios.get(Url);
    console.log("successfully running")
    console.log(data);
    const response = data.data.articles;
    setsearcharticles(response);
    console.log(response);
}
catch(error){
    console.log("getting an error in a particular topic api key ");
    console.log(error);
}
setloading(false);
    }

async function sources(){
    setloading(true);
    const uurl = "https://newsapi.org/v2/top-headlines/sources?apiKey=5272542a11f74749abffda7d835b7aa6";
    try{

        const data = await axios.get(uurl);
        console.log("data is ethical and it is running very smoothly ");
console.log(data.data.sources);
setSource(data.data.sources)
    }
    catch(error){
        console.log(error);
        console.log("got an error in this api call");
    }
    setloading(false);
}

    const value = {articles,setarticles,loading,setloading,fetchdata,theme,settheme,fetchdata_search,topic,settopic,page,setpage,setsearcharticles,searcharticles,sources,Source,setSource,setcountry,country,status,setstatus,URL,setURL}

    return <Appcontext.Provider value={value} >
    {children}
</Appcontext.Provider>

}


