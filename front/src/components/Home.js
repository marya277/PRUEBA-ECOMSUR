import React, { useEffect, useState } from 'react'

const GetProducts = () => {
  const [data, setData] = useState(null)
  const fetchURL = "http://localhost:5000/api/products"
  const getData = () =>
    fetch(`${fetchURL}/`)
      .then((res) => res.json())
console.log(data)
  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  return (
    <div>
      {data?.map((item) => 
        <div>
           <img
            src={`http://localhost:5000${item.image}`}
            alt={item.name}
          />  
          <div>{item.name}</div>
          <div>{item.price}</div>
          
        </div>
      )}
    </div>
  )
}

export default GetProducts;
 