import React,{useState} from 'react';
import Explore from '../explore/Explore';
function Footer({Link}) {
        const [footer,setFooter] =  useState({
               homelogo: true,
               Explore: false,
               Post: false,
               ForWard: false,
               profile: false,
        })
        function onClickHome() {
            setFooter(pre => {
                return {
                    ...pre,
                    homelogo: true,
                    Explore: false,
                    Post: false,
                    ForWard: false,
                    profile: false,
                    
                }
            })
        }  
        function onClickExplore() {
            setFooter(pre => {
                return {
                    ...pre,
                    homelogo: false,
                    Explore: true,
                    Post: false,
                    ForWard: false,
                    profile: false,
                    
                }
            })
        }  
        function onClickPost() {
            setFooter(pre => {
                return {
                    ...pre,
                    homelogo: false,
                    Explore: false,
                    Post: true,
                    ForWard: false,
                    profile: false,
                    
                }
            })
        }  
        function onClickForward() {
            setFooter(pre => {
                return {
                    ...pre,
                    homelogo: false,
                    Explore: false,
                    Post: false,
                    ForWard: true,
                    profile: false,
                    
                }
            })
        }  
        function onClickUserPage() {
            setFooter(pre => {
                return {
                    ...pre,
                    homelogo: false,
                    Explore: false,
                    Post: false,
                    ForWard: false,
                    profile: true,
                    
                }
            })
        }  


    return ( 
        <footer>
      <div className="tools">
     <Link to='/' >
              <span className="home-logo logo" onClick={onClickHome}>
                { footer.homelogo ? 
                
                <svg aria-label="Home" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg>
                
                :
                <svg aria-label="Home" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                 }
              </span>
          </Link>
           <Link to='/explore' element={<Explore />}>
              <span className="explore-logo logo" onClick={onClickExplore}>
                {footer.Explore ?
                <svg aria-label="Explore" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="m13.173 13.164 1.491-3.829-3.83 1.49ZM12.001.5a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12.001.5Zm5.35 7.443-2.478 6.369a1 1 0 0 1-.57.569l-6.36 2.47a1 1 0 0 1-1.294-1.294l2.48-6.369a1 1 0 0 1 .57-.569l6.359-2.47a1 1 0 0 1 1.294 1.294Z"></path></svg>
            :
            <svg aria-label="Explore" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon><polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
            }
                 
              </span>
          </Link>
           <Link to='/' className='back-to-homepage'>
              <span className="post-logo logo" onClick={onClickPost}>
                { footer.Post
                    ?
                    <svg aria-label="New post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="m12.003 5.545-.117.006-.112.02a1 1 0 0 0-.764.857l-.007.117V11H6.544l-.116.007a1 1 0 0 0-.877.876L5.545 12l.007.117a1 1 0 0 0 .877.876l.116.007h4.457l.001 4.454.007.116a1 1 0 0 0 .876.877l.117.007.117-.007a1 1 0 0 0 .876-.877l.007-.116V13h4.452l.116-.007a1 1 0 0 0 .877-.876l.007-.117-.007-.117a1 1 0 0 0-.877-.876L17.455 11h-4.453l.001-4.455-.007-.117a1 1 0 0 0-.876-.877ZM8.552.999h6.896c2.754 0 4.285.579 5.664 1.912 1.255 1.297 1.838 2.758 1.885 5.302L23 8.55v6.898c0 2.755-.578 4.286-1.912 5.664-1.298 1.255-2.759 1.838-5.302 1.885l-.338.003H8.552c-2.754 0-4.285-.579-5.664-1.912-1.255-1.297-1.839-2.758-1.885-5.302L1 15.45V8.551c0-2.754.579-4.286 1.912-5.664C4.21 1.633 5.67 1.05 8.214 1.002L8.552 1Z"></path></svg>
                    :
                  <svg aria-label="New post" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
                }
              </span>
          </Link>
           <Link to='/' className='back-to-homepage'>
                  <span className=" send-logo logo" onClick={onClickForward}>
                    {footer.ForWard?
                      <svg aria-label="Direct" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22.91 2.388a.69.69 0 0 0-.597-.347l-20.625.002a.687.687 0 0 0-.482 1.178L7.26 9.16a.686.686 0 0 0 .778.128l7.612-3.657a.723.723 0 0 1 .937.248.688.688 0 0 1-.225.932l-7.144 4.52a.69.69 0 0 0-.3.743l2.102 8.692a.687.687 0 0 0 .566.518.655.655 0 0 0 .103.008.686.686 0 0 0 .59-.337L22.903 3.08a.688.688 0 0 0 .007-.692" fill-rule="evenodd"></path></svg>
                      :
                      <svg aria-label="Direct" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>

                    }
                  </span>
              </Link>
               <Link to='*' className='back-to-homepage'>
                  <span className="logo" onClick={onClickUserPage}>
                      <div className="profile-pic">
                          <img src="https://randomuser.me/api/portraits/men/16.jpg " className="tools-pfp" alt="pfp"/>
                      </div>
                  </span>
                </Link>
          </div>
  </footer>
     );
}

export default Footer;