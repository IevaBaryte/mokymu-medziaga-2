import { useEffect, useState } from 'react';

const Home = () => {
  const [ipInfo, setIpInfo] = useState();

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => 
        {console.log(data)
            setIpInfo(data)
  });
  }, []);

  return (
    <div>
        <h1>IP address finder</h1>
        <p>IP address: </p>
        <p>{ipInfo?.ip}</p>
        <p>Location:</p>
        <p> {ipInfo?.city}</p>
        <p>Internet provider:</p> 
        <p>{ipInfo?.org}</p>
    </div>
  );
}

export default Home;