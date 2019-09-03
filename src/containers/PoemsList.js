import React from "react";
import SinglePoem from '../components/SinglePoem'
function PoemsList({data}) {
  console.log(data);

    return <div>  {data && data.map((poemCard)=> <SinglePoem />)}</div>}
  
  

export default PoemsList;
