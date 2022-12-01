import React,{useState,useEffect,useContext, useRef} from 'react';
import Picker from 'emoji-picker-react'
import MoreOptions from '../moreOptions/more-options';
import { PostData } from '../useContext';
import Likes from '../like/liked';


function CommentOverlay() {
    const {click,
        likedClicked,
        incrementLike,
        addDouble,
        userdatum,
        setUserdatum,
        ExitMoreOptions,
        toggleSave,
    } = useContext(PostData)
      const [inputField, setInputField] = useState('')
      const previnput = useRef( )
 

    const [inputStr,
         setInputStr]= useState(""); 
    const [showPicker, setShowPicker] = useState(false);

    const onEmojiclick = (event, emoji0bject) => {
        setInputStr(prevInput => prevInput + emoji0bject.emoji);
         setShowPicker(false); }
function toggleShowpicker() {
        setShowPicker(val => !val)
}

function closeComment() {
  setUserdatum(pre => {
    return{
      ...pre,
      showPostCommentsOverlay: false,
    }
  })
 

   
}
  function postComment(e) {
        e.preventDefault();
      
    setUserdatum(pre => {
        return{
            ...pre,
            commentCount: userdatum.commentCount + 1,
            comment:previnput.current.value,
        }
    })
    let appended = document.querySelector('.comment-p')
    let personAppended = document.createElement('div')
  personAppended.innerHTML = previnput.current.value

  appended.append(personAppended)
    setInputField('')
    alert('comment posted')
   
  }






    return ( 
        <div className={`modal-overlay coment-overlay ${ userdatum.showPostCommentsOverlay ? 'open-modal': ''}`}>
              <div class="modal-container container-post">
              <article className="post modal-post">
              <div className="post-nav">
                  <div className="user-details">
                      <div className="post-line ">
                          <img src={userdatum.img} className='story-img pfp-img' alt='pfp-img'/>
                      </div>
                      <p className="post-username">
                      {userdatum.username} 
                      </p>
                  </div>
                  <div className="more-options">
                    
                  </div>
         <MoreOptions  ExitMoreOptions={ExitMoreOptions}/>
              </div>
              
              <div className="post-pic-div" onClick={(e) => {
            click()
          if (userdatum.doubleclickedlike) {
            addDouble(e)
            setUserdatum(pre => {
                return {
                    ...pre,
                    doubleclickedlike: false,
                }
            })
          }

        }} >
                <div className='double-liked'>
                <svg  aria-label="Unlike" class={`_ab6-  double-liked-logo ${userdatum.doubleclickedlike ?` double-liked-transition` : ''}`} color="#ed4956"  fill="#ed4956"  role="img" viewBox="0 0 48 48"  ><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>

                </div>
            <img src={`https://picsum.photos/200/300?random=${userdatum.age}`} alt="post" className="post-pic"/>
              </div>
              <div className="post-details ">
              <div className={`saved-message ${userdatum.saveresp ?'show-saved-message': ''}`}><span>Your item has been saved.</span> <span>View your saved posts</span></div>


                  <div className="post-utilities">
      
                          <ul className="post-utils">
                            <li className="lcs">
                              <div>
                              <div className="like-logo post-logo" id={userdatum.uuid} data-test-id={userdatum.liked}  >
                           <Likes likes={userdatum.liked} likesCount={userdatum.likesCount} userdatum ={userdatum } setUserdatum={setUserdatum} increment={incrementLike} likedClicked={likedClicked}/>
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
                                  userdatum.save
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
                      <p>Liked by <strong>feyi_</strong> and <strong>{userdatum.likesCount} others</strong></p>
                  </div>
                  <div className="post-time comment-details  details">
                   1-1-1
                  </div>
              </div>
             <div className='comment-input'>
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
              
                </div>
                
          
          </article>

              </div>
              <button
              className='close' onClick={closeComment}> 
                <svg aria-label="Close" class="x1n2onr6 x1lliihq" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Close</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
              </button>
        </div>
     );
}

export default CommentOverlay;