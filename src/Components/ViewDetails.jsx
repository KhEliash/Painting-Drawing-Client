import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 

const ViewDetails = () => {
    const {id}=useParams();
    const [craft , setCraft]=useState({});
    // console.log(id);

    useEffect(()=>{
        fetch(`http://localhost:5000/singleCraft/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setCraft(data)
            // console.log(data);
        })
    },[])

    return (
        <div>
            <h1>{craft.itemName}</h1>
            <img src={craft.image} alt="" />
             
        </div>
    );
};

export default ViewDetails;