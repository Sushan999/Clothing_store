import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Khaiju = () => {
  const [khaiju, setKhaiju] = useState([]);
  console.log(khaiju);

  useEffect(() => {
    const fetchData = async (req, res) => {
      const { data } = await axios.get("https://fakestoreapi.com/products");

      setKhaiju(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {khaiju.map((data) => (
        <div>{data.title}</div>
      ))}
    </div>
  );
};

export default Khaiju;
