import React from 'react';
import InterSearch from './interSearch';
import StaticSearch from './staticSearchbar';



function Search({search,setSearch,openSearchBar}) {
    function closeSearchBar() {
        setSearch(false)
    }
 

    return(
        <div className="navs11">
     {!search
     ? <div className="search-logo logo" onClick={openSearchBar}>
            <svg aria-label="Search" className="_ab6- search-logo" color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
        </div>
            :
            <div className="input">
                 <InterSearch closeSearchBar={closeSearchBar}/> 
            <input type="text"  placeholder='search'/>
        </div>
    }
    </div>
    )
 
}
export default Search;