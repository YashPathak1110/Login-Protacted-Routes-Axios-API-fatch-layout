import React, { useEffect, useState } from "react";
import axios from "axios";
// test
function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// demo
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('There was a problem fetching the data: ', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='App'>
      <h2>Welcome</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <div className='item1'>{item.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
