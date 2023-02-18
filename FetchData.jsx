import React, { useEffect, useState, useSyncExternalStore } from "react";
import axios from "axios";

const FetchData = () =>
     {
        const [Data, setData] = useState("");
        
    const fetchData = async () => {
        const result = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-01-18&sortBy=publishedAt&apiKey=a16761d4a48c4de3873ce8664adf3768"
        )
        .then((res) => setData(res.data.articles));

        console.log (result);
    };
    useEffect(() => 
    {
        fetchData();
      }, []);

    return ( 
        <div className="container d-flex justify-content-center align-items-center flex-column my-3">
        <h3>Top Headlines</h3>
   
   <div className="my-2">
    {Data ? Data.map((items,index) => (
   <>
   <div className="container">
   <h5>{items.title}</h5>
   <img src ={items.urltoImage} alt="/" className="img"/>
   <p > {items.description}
    </p>
   </div>
   </> 
   )): "LOADING..." }
   </div>
   </div>
    )
 };

 export default FetchData;
