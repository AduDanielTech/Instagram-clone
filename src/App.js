import React from 'react';
import  {BrowserRouter as Router , Routes, Route, Link } from "react-router-dom"
import { useState,useEffect,useContext } from 'react';
import './App.css'
import Nav from './components/nav';
import Footer from './components/footer';
import Main from './components/main';
import { UserDetails } from './components/useContext';
import ForwardPost from './components/search/share/share-Overlay';
import ErrorPage from './components/ErrorPage';

const url1 = 'https://randomuser.me/api/?results=3'
const url2 = 'https://randomuser.me/api/?results=10'

     /* FETCH DATA FROM API */
function App() {
  
  const [users, setUsers] = useState([])
  const [comments, setComments] = useState([])
  const [story, setStory] = useState([])

 /*  useEffect(()=> {
    fetch(url1)
    .then(res => res.json())
    .then(data => setUsers(data.results))
  },[])

  useEffect(()=> {
    fetch(url2)
    .then(res => res.json())
    .then(data => setStory(data.results))
  },[]) */
  function empty() {
 return ''
}
  return (
    <div className="App">
       {/* USE useContext TO PUSH THE DATA TO THE CHILDREN */}





<Router>
  <Routes>
    <Route path='/' element={
<UserDetails.Provider value={{users,empty, story}}>
<Nav/>
<Main />
</UserDetails.Provider>} />
<Route path='/explore'  />
<Route path='*' element={<ErrorPage   Link={Link} />}/>
  </Routes>
  <Footer Link={Link}/>  
</Router>

    </div>
  )
  }

export default App;
