import React, { useEffect, useState } from "react";

const Api = "https://hp-api.onrender.com/api/characters";

const HarryApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(Api)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  }, []);

  return (
    <>
      <h1>Harry Potter Characters</h1>

      <div className="grid grid-cols-3 gap-4 p-10">
        {data.map((item) => (
          <div className="shadow-2xl w-60" key={item.name}>
            <h1 className="font-bold">{item.name}</h1>
            <img className="object-cover w-60" src={item.image} alt={item.name}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default HarryApi;