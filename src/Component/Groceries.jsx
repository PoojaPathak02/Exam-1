import { useState } from "react";
function Grocerie()
{
    const [value,setvalue]= useState([]);
    const [counter,setcounter] = useState(1)

  function fetchdata()
  {
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries")
    .then((res)=>res.json())
    .then((data)=>setvalue(data.data))
    .catch((err)=>console.log(err))

  }
  fetchdata()
    return(
        <div>
         {value.map((el)=>(<div key={el.id}>
            <h1>Groceries</h1>
        <img src= {el.image} alt="" height={"200px"} width={"200px"}></img>
        <h3>{el.name}</h3>
        <h5>{el.price}</h5>
        <h2>{counter}</h2>
        <button onClick={(()=>setcounter(counter-1))}>
            
            -
            </button>
        <button onClick={(()=>setcounter(counter+1 ))}>+</button>
      </div>))}
        </div>
    )
}
export default Grocerie