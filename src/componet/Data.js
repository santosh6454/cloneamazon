import React, { useState } from "react";
const Data =()=>{
    const [value, setValue] = useState('');
    const [results,setResults] = useState([]);
// Api call here
const fetchImages =()=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=3xeTa3EWFmNOFkTLui0xolwaKtIgJ4IWgLhH8-aNLA4&query=${value}`)
    .then(res=>res.json())
    .then(item=>{
        // console.log(item)
        setResults(item.results)
    })
}

    return (
        <div>
     
            <div className="myDiv">
                <span>Search</span>
                <input
                className=" input"
                 type='text' 
                 value ={value} 
                 onChange ={(e)=>setValue(e.target.value)}
                  />
                <button onClick={()=>fetchImages()}>Send</button>

               

            </div>
            <div className="gallery">
                    {
                        results.map((item1 )=>{
                            return <img className="item" key ={item1.id} src = {item1.urls.regular} />

                        })
                    }

                </div>
            </div>
           

  
    )
}
export default Data;
//3xeTa3EWFmNOFkTLui0xolwaKtIgJ4IWgLhH8-aNLA4