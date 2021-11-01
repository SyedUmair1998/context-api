import React from 'react';
import {myContext} from './App';


const Guest = () => {
    

    return (
           <myContext.Consumer>{data=><h2>{data}</h2>}</myContext.Consumer>
       
    )
}

export default Guest
