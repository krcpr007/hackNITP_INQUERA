import React, {useEffect, useState} from 'react';
import QueryCard from './QueryCard.js';

function Home() {
  const [data, setData] = useState([]);
  const fetchAllPolls = async () => {
    fetch(`http://localhost:5000/all-query`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  useEffect(() => {
    fetchAllPolls();
  }, []);
  return (
    <div>
      {data.map((item)=>{
        return <QueryCard key={item._id} name={item.name} title={item.title} query= {item.query} _id={item._id} tags={item.tags} email={item.email} />
      })}
    </div>
  );
  }


export default Home
