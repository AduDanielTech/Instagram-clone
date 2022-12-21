import React from 'react';

function date() {
    let date = new Date()
    let  year =  date.getFullYear() ;
    let month = date.getMonth() + 1
    let day =  date.getDate();
      let thisDate = year + '-' + month + '-' + day
    return thisDate
}

export default date;