//custom hook

import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {  //useeffect ->whenever any changes then it will again call api or method
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency])) //same as res.currency
        console.log(data);
        
    },[currency])
    console.log(data);
    return data

}

export default useCurrencyInfo;

