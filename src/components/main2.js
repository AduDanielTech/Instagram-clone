import React, {useEffect,useState,useRef}from 'react';
import useSingleAndDoubleClick from './like/doubleclicked';
import  { useContext } from "react";
import Likes from './like/liked';
import { userData, UserDetails,PostData } from './useContext';
import MoreOptions from './moreOptions/more-options';
import CommentOverlay from './comments/coment-overlay';
import ForwardPost from './search/share/share-Overlay';
import ViewAllComments from './comments/viewAllComments';



function Posts({delay = 4000}) {
    const {first, number,uuid,username,postcode,age,large} = useContext(userData)
   const geLikeno = Math.floor(Math.random() * 15000)
   const getCommentNo = Math.floor(Math.random() * 5000)
   const {empty, comments} = useContext(UserDetails)
    const [userdatum,setUserdatum] = useState({
        username: username,
        id: uuid,
        age: age,
        postcode: postcode,
        liked: false,
        img:large,
        save:false,
        saveresp : false,
        likesCount:geLikeno,
        doubleclickedlikecount:false,
        doubleclickedlike:false,
        moreOptions:false,
        showPostCommentsOverlay:false,
        commentCount:getCommentNo,
        comment:'',
        comentposted:false,
        showShare:false,
        showComments:false,

    })

    let articles = document.querySelectorAll('.post')
    const root = document.querySelector('.root')
   /*  function clickedArticle(e) {
    let returnedArt =  articles.forEach((article) =>{
        const likebtn =  article.querySelector('.like-logo')
        root.addEventListener('DomContentLoaded' , () =>{
            likebtn.addEventListener('click', )
        })
    }) */
     function likedClicked(e) {
       
    setUserdatum(pre => {
        return{
            ...pre,
            liked: true
        }})}


     function incrementLike() {
        setUserdatum(pre =>{
            return {
                ...pre,
                likesCount: userdatum.likesCount + 1 
            }})}

    const click = useSingleAndDoubleClick(bleh, doubleClickLiked);
function bleh() {
   ' console.log(userdatum.doubleclickedlike);'
}

    function doubleClickLiked(e) {
        if (!userdatum.doubleclickedlikecount) {
        incrementLike()
        }
        setUserdatum(pre => {
            return {
                ...pre,
                doubleclickedlikecount: true,
                doubleclickedlike: true,
            }
        })
        let y = setTimeout(()=>{
            setUserdatum(pre => {
                return {
                    ...pre,
                    doubleclickedlike: false,
                }
            })
        },[delay])
           return    likedClicked()
        }
            function addDouble(e) {
                return console.log(e.target.className);
            }




            function toggleSave() {
                setUserdatum(pre => {
                    return {
                        ...pre,
                        save: !userdatum.save,
                        saveresp:true,
                    }
                })
              
            }
            
        useEffect(()=>{
           if (userdatum.saveresp) {
            const timer = setTimeout(() => {
                // simple click
                setUserdatum(pre=> {
                    return{
                        ...pre,
                      saveresp : false,
                    }
                })
            }, delay);
           }
           
        },[toggleSave])





        function onclickMoreOptions() {
            setUserdatum(pre=> {
                return{
                    ...pre,
                    moreOptions:true,
                }
            })
         }
         function ExitMoreOptions() {
            setUserdatum(pre=> {
                return{
                    ...pre,
                    moreOptions:false,
                }
            })
         }


            function openCommentsOverlay() {
                setUserdatum(pre => {
                    return{
                        ...pre,
                        showPostCommentsOverlay: true,
                    }
                   })
                
                 
            }

            function openShare() {
                setUserdatum(pre =>{
                    return{
                        ...pre,
                        showShare: true,
                    }
                })
             }
            function ShowComments() {
                setUserdatum(pre =>{
                    return{
                        ...pre,
                        showComments: true,
                    }
                })
             }
             let date = new Date()
           let  year =  date.getFullYear() ;
           let month = date.getMonth() + 1
           let day =  date.getDate();
             let thisDate = year + '-' + month + '-' + day



















































    return (
       <PostData.Provider value={{incrementLike,
       likedClicked,
       click,
       addDouble,
       userdatum,
       setUserdatum,
       ExitMoreOptions,
       toggleSave,
       
       }}>
         <article className="post" key={userdatum.id} >
        <div className="post-nav">
            <div className="user-details">
                <div className="post-line ">
                    <img src={userdatum.img} className='story-img pfp-img' alt='pfp-img'/>
                </div>
                <p className="post-username">
                    {userdatum.username} 
                </p>
            </div>
            <div className="more-options" onClick={onclickMoreOptions}>
                <svg aria-label="More options" className="_ab6- logo" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
            </div>
           <MoreOptions/>
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
        <div className="post-details">
        <div className={`saved-message ${userdatum.saveresp ?'show-saved-message': ''}`}><span>Your item has been saved.</span> <span>View your saved posts</span></div>
            <div className="post-utilities">
           
                    <ul className="post-utils">
                      <li className="lcs">
                        <div  >
                            <div className="like-logo post-logo" id={userdatum.uuid} data-test-id={userdatum.liked}  >
                           <Likes likes={userdatum.liked} likesCount={userdatum.likesCount} userdatum ={userdatum } setUserdatum={setUserdatum} increment={incrementLike} likedClicked={likedClicked}/>
                            </div>
                        </div>  
                        <div>
                            <div className="comment-logo post-logo" onClick={openCommentsOverlay} >
                                <svg aria-label="Comment" className="_ab6- logo" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                              
                            </div>
                            <CommentOverlay  />
                        </div>
                        <div>
                            <div className="sharepost-logo post-logo" onClick={openShare}>
                                <svg aria-label="Share Post" className="_ab6- logo" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                            </div>
                            <ForwardPost />
                        </div>
                      </li>
                        <li >
                            <div className="fovourite-logo post-logo" onClick={toggleSave}>
                              
                             
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
           
        </div>
        <div className="post-likes details">
                <div className="blackdot"></div>
                <p>Liked by <strong>feyi_</strong> and <strong> {userdatum.likesCount} others</strong></p>
            </div>
            <div className="post-desc details">
                <p><strong>yabaleftonline</strong> Mothers on the tl</p>
            </div>
            <div className="post-comments details">
                <p className='comment-p' onClick={ShowComments } >
                  view all 300 comments
                </p>
                <ViewAllComments/>
            
            </div>
            <div className="post-time details">
            {thisDate}
            </div>
    
    </article>

       </PostData.Provider>

      )
}

export default Posts;