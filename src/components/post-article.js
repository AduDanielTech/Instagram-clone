import React from 'react';
function PostArticle({}) {
    return (  
        <div className="main-bottom ">
        <article className="post">
            <div className="post-nav">
                <div className="user-details">
                    <div className="post-line ">
                        <img src="https://randomuser.me/api/portraits/men/16.jpg" alt="pfp" className="story-img post-profile-img"/>
                    </div>
                    <p className="post-username">
                        hey
                    </p>
                </div>
                <div className="more-options" onClick={onclickMoreOptions}>
                    <svg aria-label="More options" className="_ab6- logo" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </div>
       <MoreOptions  ExitMoreOptions={ExitMoreOptions}/>
            </div>
            
            <div className="post-pic-div" onClick={click}>
              <div className='double-liked'>
              <svg  aria-label="Unlike" class="_ab6- double-liked-logo   " color="#ed4956"  fill="#ed4956"  role="img" viewBox="0 0 48 48"  ><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
              </div>
                <img src="https://randomuser.me/api/portraits/men/16.jpg" alt="post" className="post-pic"/>
            </div>
            <div className="post-details">
                <div className="post-utilities">
    
                        <ul className="post-utils">
                          <li className="lcs">
                            <div>
                                <div className="like-logo post-logo" onClick={liked}>
                              <Likes likesCount={likesCount} setlikesCount={setlikesCount} likes={likes} setlikes={setlikes} liked={liked} increment={increment}/>
                                </div>
                            </div>
                            <div>
                                <div className="comment-logo post-logo" onClick={onclickComent} >
                                    <svg aria-label="Comment" className="_ab6- logo" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    <CommentOverlay click={click} likesCount={likesCount} setlikesCount={setlikesCount} likes={likes} setlikes={setlikes} liked={liked} increment={increment} onClick={liked} />
                                </div>
                            </div>
                            <div>
                                <div className="sharepost-logo post-logo">
                                    <svg aria-label="Share Post" className="_ab6- logo" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                </div>
                            </div>
                          </li>
                            <li onClick={toggleSave}>
                                <div className="fovourite-logo post-logo" onClick={toggleSave}>
                                  
                                  <div className='saved-message'><span>Your item has been saved.</span> <span>View your saved posts</span></div>
                                  {
                                      save
                                      ? <svg  onClick={toggleSave} aria-label="Remove" class="_ab6- remove" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path></svg>
                                      :
                                      <svg  onClick={toggleSave} aria-label="Save" className="_ab6- logo" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>

                                  }
                                   
                                    
                                </div>
                            </li>
                        </ul>
                    
                </div>
                <div className="post-likes details">
                    <div className="blackdot"></div>
                    <p>Liked by <strong>feyi_</strong> and <strong>{likesCount} others</strong></p>
                </div>
                <div className="post-desc details">
                    <p><strong>yabaleftonline</strong> Mothers on the tl</p>
                </div>
                <div className="post-comments details">
                   <span className="comme nts">View all 679 comments</span>
                </div>
                <div className="post-time details">
                 1-1-1
                </div>
            </div>
           
        
        </article>

         
    </div>
    );
}

export default PostArticle;