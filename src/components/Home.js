import React, { useEffect, useState } from 'react';
import QueryCard from './QueryCard.js';
import Loader from './Loader.js';
function Home() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const fetchAllPolls = async () => {
    setLoader(true);
    fetch(`https://inquera.onrender.com/all-query`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setLoader(false); 
      });
  };
  useEffect(() => {
    fetchAllPolls();
  }, []);
  if(loader){
    return <Loader />
  }
  return (
    <div className=''>
      {data.length === 0 ? <>
        <div className='h-screen'>
          <h1 className='text-center text-xl font-medium'>Nothing to show</h1>
        </div>
      </> : null}
      {data.map((item) => {
        return <QueryCard key={item._id} name={item.name} title={item.title} query={item.query} _id={item._id} tags={item.tags} email={item.email} />
      })}
    </div>
  );
}


export default Home
