import { useState,useEffect } from "react";


function useCurrencyInfo(curreny){
  const [data,setdata] = useState({});
  useEffect(()=>{
    fetch(`https://v6.exchangerate-api.com/v6/46811a48f6ff9fe1ee13f95c/latest/${curreny}`)
    .then((res)=>res.json())
    .then((res)=>res["conversion_rates"])
    .then((res)=>setdata(res))
  } , [curreny])
  console.log(data);
  return data;
}

export default useCurrencyInfo;