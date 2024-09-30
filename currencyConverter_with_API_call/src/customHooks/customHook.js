// Here lets do API call and create our own custom hook because hooks just need a function and a return array we will do same here

import { useState, useEffect } from "react";

const api_url = "https://open.er-api.com/v6/latest/usd";
function customHooks(currency) {
  const [data, setData] = useState(
    {}
  ); /*Here am passing object because if somehow Api got fail to call then atleas it shows a object */

  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((res) => setData(res[currency]));

    console.log(data);
  }, [currency]);

  console.log(data)
  return data; 
}

export default customHooks;
