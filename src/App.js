import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import  {BrowserRouter as Router , Routes, Route, Link } from "react-router-dom"
import { useState,useEffect,useContext } from 'react';
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import Nav from './components/nav';
import Footer from './components/footer';
import Main from './components/main';
import { ExploreData, UserDetails,GlobalData } from './components/useContext';
import ForwardPost from './components/search/share/share-Overlay';
import ErrorPage from './components/ErrorPage';
import Explore from './explore/Explore';
import PostImg from './Post/postimage';
import ProfilePage from './profilePage/profilePage';
import LoginPage from './components/login/loginpage';
import preloader from './images/preloader.gif'

const url1 = 'https://randomuser.me/api/?results=30'
const url2 = 'https://randomuser.me/api/?results=10'
const url3 = `https://randomuser.me/api/?results=10`

     /* FETCH DATA FROM API */
function App() {
    const [postImg,setpostimg] = useState(false)
  const [count, setCount] = useState(10)
   
  const [users, setUsers] = useState([])
  const [story, setStory] = useState([])
  const [explore, setExplore] = useState([])
  const [askforusername, setAskForUsername] = useState({
    userimg:'',
    username:'',
    addedUsername:false,
    preloader:true,
    othername:'',
    login:true,
  })
  const [desktopView, setdesktopView] = useState(false);
  const [maxDesktopView, setMaxDesktopView] = useState(false);
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
  },3000);
  
  if (window.innerWidth > 600) {
 setdesktopView(true)

  } else if (window.innerWidth < 599) {
setdesktopView(false)
  }

  window.addEventListener('resize', function() {
    setTimeout(() => {
    },3000);
    if (window.innerWidth > 600) {
   setdesktopView(true)

    } else if (window.innerWidth < 599) {
  setdesktopView(false)
    }
    })
  })
  
  
  
    
  useEffect(() => {
    setAskForUsername((pre) => {
      return {
        ...pre,
        preloader: false,
      }
      });
    }, []);
    

  useEffect(()=> {
    fetch(url1)
    .then(res => res.json())
    .then(data => setUsers(data.results))
  },[url1])

  useEffect(()=> {
    fetch(url2)
    .then(res => res.json())
    .then(data => setStory(data.results))
  },[url2])

  useEffect(()=> {
    fetch(url3)
    .then(res => res.json())
    .then(data => setExplore(data.results))
    .catch(err => console.log(err + 'hi'))
  },[url3])
  
  function empty() {
   return ''
  
}
function login() {
  setAskForUsername(pre => {
    return{
      ...pre,
      addedUsername: true,
    }
  })
}
function buttonNoWork() {
 return toast.error("Opps, this button doesn't work")
}
function linkNoWork() {
 return toast.error("Opps, this button doesn't work")
}
return (
  <div className="App">
     
     {/*   <div class={`preloader ${askforusername.preloader ? '':' hide-preloader'}`}>
      <img src={preloader} alt="preloader" class="preloader__item" />
    </div>
         */}
         <ToastContainer />
<GlobalData.Provider value={{Link,desktopView,askforusername,setAskForUsername,buttonNoWork,linkNoWork}}>
<Router>
<div className='global'>
<Routes>
    <Route path='/login' default element={
    <LoginPage Link={Link}  login={login}
    />}/>
    <Route  path='/homepage'  default element={
<UserDetails.Provider value={{users,empty, story}}>
{ desktopView ? '' :  <Nav/>}
<Main />
<PostImg postImg={postImg} setpostimg={setpostimg} />
</UserDetails.Provider>} />
<Route path='/userprofile' element={<ProfilePage   />}/>
<Route path='/explore' element={
  <ExploreData.Provider value={{explore}}>
<Explore />
</ExploreData.Provider>} />

<Route path='*' element={<ErrorPage   Link={Link} />}/>
  </Routes>
  
</div>
<UserDetails.Provider value={{users,empty, story}}>
  <Footer Link={Link} postImg={postImg} setpostimg={setpostimg} desktopView={desktopView}/>  
  </UserDetails.Provider>
</Router>
</GlobalData.Provider>
      

    </div>
  )
  }

export default App;
