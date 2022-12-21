    import React, { useEffect ,useRef,useContext} from 'react';
    import { useState } from 'react';
    import './profilepage.css';
   import { GlobalData } from '../components/useContext';
import FileUpdate from './fileupload/fileupload';
    function ProfilePage({delay}) {
        const {linkNoWork,buttonNoWork,Link,askforusername,setAskForUsername} = useContext(GlobalData)
        const [translate, setTranslate] = useState('')
        const [username, setUsername] = useState('')
        const [showpost, setShowpost] = useState({
            myPosts: true,
            SavedPosts: false,
            TaggedPost: false,
            openInput: false,
            openSetting:false,
        })
        function openInput() {
            setShowpost(pre => {
                return {
                    ...pre, 
                   openInput: !showpost.openInput,
                }
            })
        }
        function closeInput() {
            setShowpost(pre => {
                return {
                    ...pre, 
                   openInput: !showpost.openInput,
                }
            })
        }
      

        
        let   addActive = (item ) => {
        const buttons = document.querySelectorAll('.buttons');
        buttons.forEach(button => {    
        if (button === item.target.parentElement) {    
            button.classList.add('active');
            if (button.dataset.id === '1') {        
                setShowpost(pre => {
                    return {
                        ...pre, 
                        myPosts: true,
                        SavedPosts: false,
                        TaggedPost: false,
                    }
                })
            return setTranslate('0')
            } else if (button.dataset.id === '2') {
                setShowpost(pre => {
                    return {
                        ...pre, 
                        myPosts: false,
                        SavedPosts: true,
                        TaggedPost: false,
                    }
                })
            return setTranslate('70')
            } else if (button.dataset.id === '3') {
                setShowpost(pre => {
                    return {
                        ...pre, 
                        myPosts: false,
                        SavedPosts: false,
                        TaggedPost: true,
                    }
                })
            return setTranslate('140')
            }
            
        } else {
            button.classList.remove('active');
        }
        
        });
        
        

    }
            function openSettings (){
                setShowpost(pre => {
                    return{
                        ...pre,
                        openSetting: !showpost.openSetting,
                    }
                })
            }
            function logOut() {
                setAskForUsername((pre) => {
                  return{
                    ...pre,
                    login: false
                  }
                })
               }

        return ( 
        <div className="profile-page">
            <div className="profilediv" >
            <svg aria-label="Options" onClick={openSettings} class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
          { showpost.openSetting?  <Link to='/' className='openSetting' onClick={logOut}> Log out</Link>:<></>}
            <div className="profileName">
                <div className='p stateusername-div'>{askforusername.username}</div>
            <svg aria-label="Down chevron icon" class="_ab6- chev-down" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg>
            </div>
            <svg aria-label="Discover People" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z"></path></svg>
            </div>
            <div className="profilediv">
                <div className="user-details-div">
                    <div className="profile-img">
                        <img src={askforusername.userimg} alt="img" className='user-pfp '/>
                    </div>
                    <div className='edit-profile'>
                        <div className='stateusername-div'>
                        {askforusername.username}
                        </div>
                              <div>
                              <div class={`modal-overlay set-post-overlay ${
            showpost.openInput  ?   'open-modal' : ''
           }`}>
           <div class="modal-container post-cont">
           <FileUpdate />
           <label htmlFor="username" className='changeusername-label'>Input New Username</label>
                                <input type="text" required id="Username" 
                    value={askforusername.username}
                    placeholder='new........'
                    onChange={(e)=>setAskForUsername(pre => {
                    return{
                        ...pre,
                        username:e.target.value,
                    }
                    })}
                    className="edit-profile-input"
                    />
                     <button className='setpost-button' onClick={closeInput}>
                  Confirm
                </button>
            </div></div>
                              </div>
                        <button onClick={openInput}>{showpost.openInput?'Save edited profile name': 'Edit username'} </button>
                    </div>
                </div>
                <div className="user-details-div ">{askforusername.othername}</div>
                <div className="user-details-div">
                    <div className="add-new-description">
                    <div className="white-line">
                    <svg aria-label="Plus icon" class="_ab6-" color="#c7c7c7" fill="#c7c7c7" height="30" role="img" viewBox="0 0 24 24" width="30"><path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path></svg>
                    </div>
                    New
                    </div>
                </div>
            </div>
            <div className="profilediv">
                <div onClick={linkNoWork} className="user-numbers">
                    <div className="inner">0</div>
                    <div className="user-numbers-texts">post</div>
                </div>
                <div onClick={linkNoWork} className="user-numbers">
                    <div className="inner">55</div>
                    <div className="user-numbers-texts">followers</div>
                </div>
                <div onClick={linkNoWork} className="user-numbers">
                    <div className="inner">120</div>
                    <div className="user-numbers-texts">following</div>
                </div>
            </div>
            <div className="profilediv">
                <div className="posts-saved">
                    <div className="buttons" data-id="1" onClick={addActive} >
                        <div className='clicked-button-cover'></div>

                        {
                        showpost.myPosts ? 
                        <svg aria-label="Posts" class="_ab6-" color="#0095f6" fill="#0095f6" height="24" role="img" viewBox="0 0 24 24" width="24"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                        :
                        <svg aria-label="Posts" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                        }
                    </div>
                    <div className="buttons" data-id="2" onClick={addActive}>
                        <div className='clicked-button-cover'></div>
                        {
                            showpost.SavedPosts?
                            <svg aria-label="Saved" class="_ab6-" color="#0095f6" fill="#0095f6" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                            :
                    <svg aria-label="Saved" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        }
                    </div>
                    <div className="buttons" data-id="3" onClick={addActive}>
                        <div className='clicked-button-cover'></div>
                        {
                            showpost.TaggedPost ?
                            <svg aria-label="Tagged" class="_ab6-" color="#0095f6" fill="#0095f6" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                            :
                    <svg aria-label="Tagged" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                        }
                    </div>
                </div>
                <div className="posts-saved" style={{transform: `translate(-${translate}vw)`}}>
                <div className="post-saved-div">
                <div className="post-pictures">No posts here</div>
                    <div className="post-pictures"> No saved posts</div>
                    <div className="post-pictures">No Tagged posts</div>
                    </div> 
                </div>
            </div>
        </div>
        );
    }

    export default ProfilePage;