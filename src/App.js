import './App.css'
import React ,{useState }from 'react';
import Nav from './nav';
import { useEffect } from 'react';
import Footer from './footer';
import Main from './main';

const url = 'https://randomuser.me/api/?results=10'


function App() {
  const [users, setUsers] = useState([])
  useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data.results))
  },[])
  return (

    <div className="App">
      

<Nav/>
<Main url={url} users={users}/>
<Footer/>  

    </div>
  )
  }

export default App;
