import { useEffect, useState } from 'react';
import './App.css';
import Bars from './Components/Bars';
import Cards from './Components/Cards';
import Filter from './Components/Filter';
// import dataf from './Data/data';
import countryData from './Data/countryData';


function App() {
  const [countryDataState , setCountryDataState] =useState(countryData);
  // const [data , setData] = useState([
  //   {

  //   },
  // ]);
  const [fetchdata , setFetchdata] = useState([]);
  const [data , setData] =useState([
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ])


  console.log(countryDataState);

  return (
    <div className="main">

        <Filter />
        <Cards />
        <Bars data={countryDataState} />
  
    </div>
  );

}

export default App;
