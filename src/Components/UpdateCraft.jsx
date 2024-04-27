import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateCraft = () => {
  const { id } = useParams();
  const [craft, setCraft] = useState({});
 

  useEffect(() => {
    fetch(`http://localhost:5000/singleCraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraft(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>update:{craft.itemName}</h1>
    </div>
  );
};

export default UpdateCraft;
