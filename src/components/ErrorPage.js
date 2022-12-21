import React from 'react';
import img from '../images/404img.png'
function ErrorPage({Link}) {
    return ( 
       
            <div className="errorpage">
              <div className="err">
            <div>
             
            <img src={img} alt="." className='error-img'/>
            </div>
               <h3 style={{fontWeight: '600'}}>This Page Isn't Available Right Now</h3>
               <p>
               This may be because of a technical error that we're working to get fixed. Try reloading this page.
               </p>
               <button className='back-to-homepage'>
                <Link to='/homepage' className='back-to-homepage'><strong>Back to homepage</strong> </Link>
               </button>
              </div>
            </div>
     
     );
}

export default ErrorPage;