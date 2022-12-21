import React, { useEffect } from 'react';
import { useState,useRef } from 'react';
import { useContext } from 'react';
import { ExploreData,GlobalData } from '../components/useContext';
import ExploreMoreOptions from './ExploreComponents/moreOptions/more-options'
import Picker from 'emoji-picker-react'
import './explore.css'
import ExploreLikes from './ExploreComponents/liked';
import date from '../components/date';

function Explore({delay = 4000}) {
    const {explore}  = useContext(ExploreData)
    const {desktopView,linkNoWork,buttonNoWork,Link} = useContext(GlobalData)
    
  
    window.addEventListener('scroll', addMorePictures)
    function addMorePictures() {
        const exploreImages = document.querySelectorAll('.explore')       
      let pageLenght = window.innerHeight / 5 * 4
        exploreImages.forEach(image => {
            const boxTop = image.getBoundingClientRect().top

            if (boxTop < pageLenght) {
                image.classList.add('show-more-images')
            }else{
                image.classList.remove('show-more-images')
            }
        })
    }
   window.addEventListener('DOMContentLoaded',  addMorePictures())
    return (
      <div className='explore-page'>

        <div  className='explore-cont'>
        <div className='explore start-ex' >

{
    explore.map((user) => {
        const {
             location:{postcode,},
             login:{username},
             picture:{large},
            } = user
           let number = Math.floor(postcode/100)
           const [state,setstate] =useState({
            number: number,
            userimg:large,
            username:username,
            image:'',
            showOverlay:false,
            like:false,
            moreOptions:false,
            saveresp:false,
            save:false,
           })

        const imgRef = useRef(null)
          let numb = ''
          let com = ''
          var num = state.number * 121
          var comnum =state.number * 50

          switch (true) {
            case num >= 1000 && num < 100000:
              numb = Math.floor(num / 1000 )+ "k"
              break;
            case num >= 100000 && num < 1000000:
              numb = Math.floor(num / 100000) + "M"
              break;
            case num >= 1000000:
              numb =Math.floor( num / 1000000) + "B"
              break;
            case num = NaN || undefined:
              numb =  10000
              break;
            default:
              numb = '1k' 
          }
          switch (true) {
            case comnum >= 1000 && comnum < 100000:
              com = Math.floor(comnum / 1000 )+ "k"
              break;
            default:
              com = 500
          }
         let showClicked = () =>{
          setstate(pre => {
            return {
              ...pre,
              image: imgRef.current.src,
              showOverlay: true
            }
          })
          
          }
  
         let closeclicked = () =>{
          setstate(pre => {
            return {
              ...pre,        
              showOverlay: false
            }
          })            
          }
          function likeImg() {
            setstate((pre) => {
              return{
                  ...pre,
                 like: !state.like,
              }
            })
          }
          function UnlikeImg() {
            setstate((pre) => {
              return{
                  ...pre,
                 like: false,
              }
            })
          }
          function ExitMoreOptions() {
             setstate((pre) => {
              return{
                ...pre,
                 moreOptions:false
              }})}
          function openMoreOptions() {
             setstate((pre) => {
              return{
                ...pre,
                 moreOptions:true
              }})}
              const [showPicker, setShowPicker] = useState(false);

              const onEmojiclick = (event, emoji0bject) => {
               
                   setShowPicker(false); }
          function toggleShowpicker() {
                  setShowPicker(val => !val)
          }
          function toggleSave() {
            setstate(pre => {
                return {
                    ...pre,
                    save: !state.save,
                    saveresp:true,
                }
            })
          
        }
        let thisDate = date()
    useEffect(()=>{
       if (state.saveresp) {
        const timer = setTimeout(() => {
            // simple click
            setstate(pre=> {
                return{
                    ...pre,
                  saveresp : false,
                }
            })
        }, delay);
       }
       
    },[toggleSave])


           return(
           <>
            <div className="explore-img-cont" key={`${state.number}`} >
                <div className="black-surface" onClick={showClicked}>
            
                <i class="fa fa-heart "></i> <div>{numb = NaN ? 0 : numb}</div>
                <i class="fa fa-comment "></i> <div>{com}</div>

                </div>
    
                <img
               
                ref={imgRef}
                 src={`https://picsum.photos/200/300?random=${state.number}`}
                alt="" 
                style={{
                    width:'100%',
                    height:'100%'
                  }}
                  />
             
            </div>
            <div className={` explore-overlay ${ state.showOverlay ? 'open-modal': ''}`}>
            <div class="modal-explore">
                  <div className="post-nav modalimg-cont">
           {
            desktopView?
            <>
            <div className="user-details">
            <div className="post-line ">
                      <img src={state.userimg} className='story-img pfp-img' alt='pfp-img'/>
                  </div>
                  <p onClick={linkNoWork} className="post-username">
                  {state.username} 
                  </p>
              </div> 
             <div className="more-options" onClick={openMoreOptions}>
              <svg aria-label="More options" class="_ab6- explore-more-options" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
              </div>
            </>
            :
            <>
             
              <div className="post-line ">
                      <img src={state.userimg} className='story-img pfp-img' alt='pfp-img'/>
                  </div>
                 <div><div className='post-username'> {state.username}</div></div>
                  <div className="more-options" onClick={openMoreOptions}>
                  <svg aria-label="More options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
              </div>
            </>
           }
     <ExploreMoreOptions  ExitMoreOptions={ExitMoreOptions} state={state}/>
          </div>
            <div className="modal-explore-cont modalimg-cont">
            <img src={state.image} alt="explore-img" 
            style={
             {
               width:'100%',
               height:'100%'
             }  
            }
            className='explore-modal-img'
            />
            </div>
           <div className='modalimg-cont'>
           <div className="post-details ">
              <div className={`saved-message ${state.saveresp ?'show-saved-message': ''}`}><span>Your item has been saved.</span> <span>View your saved posts</span></div>


                  <div className="post-utilities">
      
                          <ul className="post-utils">
                            <li className="lcs">
                              <div>
                              <div className="like-logo post-logo" id={state.uuid} data-test-id={state.like} onClick={likeImg} >
                           <ExploreLikes UnlikeImg={UnlikeImg} state={state} setstate={setstate} />
                            </div>
                              </div>
                              <div>
                                  <div className="comment-logo post-logo">
                                      <svg aria-label="Comment" className="_ab6- logo" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                     
                                  </div>
                              </div>
                              <div>
                               
                              </div>
                            </li>
                              <li onClick={toggleSave}>
                                  <div className="fovourite-logo post-logo" onClick={toggleSave}>
                                    <div className='saved-message'><span>Your item has been saved.</span> <span>View your saved posts</span></div>
                                    {
                                  state.save
                                  ? <svg aria-label="Remove" class="_ab6- remove" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path></svg>
                                  :
                                  <svg aria-label="Save" className="_ab6- logo" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>

                              }
                                     
                                      
                                  </div>
                              </li>
                          </ul>
                      
                  </div>
                  <div className="post-likes comment-details  b details">
                      <div className="blackdot"></div>
                      <p>Liked by <strong>{numb}</strong> users</p>
                  </div>
                  <div className="post-time comment-details  details">
                 {thisDate}
                  </div>
              </div>
           {
           /*   <div className='comment-input'>
                <div className='emoji-box' onClick={toggleShowpicker}> 
              <div className='picker'>
              {showPicker && <Picker 
                pickerStyles = {{ width: '50%' }}
                 onEmojiClick={onEmojiclick} />}
              </div>
                <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
               
                </div>


              
               <input
                placeholder='Add a comment'
                ref={previnput}
                required
                type='text'
                onChange={e => setInputField(e.target.value)
            }value={inputField}
                />
                 <button type='submit' className='post--comment '  onClick={postComment}>
                  <p onClick={closeComment}>Post</p>
                  </button>
              
                </div> */}
           </div>
          </div>
          <button
          className='close' onClick={closeclicked}> 
            <svg aria-label="Close" class="x1n2onr6 x1lliihq" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Close</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
          </button>
    </div>
          
</>
           )
        })
}
       
        
    </div>

        </div>
      </div>
        
    );
}

export default Explore;