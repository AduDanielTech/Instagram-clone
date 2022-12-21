import React from 'react';
import { useContext } from 'react';
import { GlobalData } from '../../useContext';

function InterSearch({closeSearchBar}) {
    const {linkNoWork,} = useContext(GlobalData)
    function deleteAllSearch() {
    let parentEl=   document.querySelector('.recent')
    
    let returned = parentEl === null ? '' : parentEl.remove()
    return returned
    }
    function deleteSearch(t) {
    let parentEl=   t.target.parentElement  
    parentEl.remove()
   
    }
    return ( 
        <div className='searche'>
        <div className="recent-searches">
                    <div className="recents">
                        <div className="iR"><strong>Recent</strong></div>
                        <div className="1"><span className="clear-all" onClick={deleteAllSearch}>Clear all</span></div>
                    </div>
                    <div className="recent">
                        <div className=" skelenton ">
                            
                            <div onClick={linkNoWork} className="skelenton_block post-profile-search serach-img-div">
                                <img src="https://randomuser.me/api/portraits/men/16.jpg" alt="pfp" className="story-img post-profile-search"/></div>
                            <div className="skelenton_block iR s">hey</div>
                            <div className="skelenton_block s">hey</div>
                            <span className="material-symbols-outlined close-search " onClick={deleteSearch}>
                                            close
                                </span>
                        </div>
                        <div className=" skelenton ">
                            
                            <div onClick={linkNoWork} className="skelenton_block post-profile-search serach-img-div">
                                <img src="https://randomuser.me/api/portraits/men/16.jpg" alt="pfp" className="story-img post-profile-search"/></div>
                            <div className="skelenton_block iR s">hey</div>
                            <div className="skelenton_block s">hey</div>
                            <span className="material-symbols-outlined close-search" onClick={deleteSearch}>
                                            close
                                </span>
                        </div>
                        <div className=" skelenton ">
                            
                            <div onClick={linkNoWork} className="skelenton_block post-profile-search serach-img-div">
                                <img src="https://randomuser.me/api/portraits/men/16.jpg" alt="pfp" className="story-img post-profile-search"/></div>
                            <div className="skelenton_block iR s">hey</div>
                            <div className="skelenton_block s">hey</div>
                            <span className="material-symbols-outlined close-search" onClick={deleteSearch}>
                                            close
                                </span>
                        </div>
                    </div>
                </div>
                <div className="input-div added-search">
                    <span className="material-symbols-outlined " onClick={closeSearchBar}>
                        cancel
                        </span>
                       
                </div>
      </div>
     );
}

export default InterSearch;