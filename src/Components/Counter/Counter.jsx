import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incCount,decCount,resetCount } from "../../Redux/action.js"; 

export const Counter = () => {
    const count = useSelector((state) => state.count);
     const dispatch = useDispatch()
     return (
         <div>
             <h1>
                 count : {count}

             </h1>
             <button onClick={() => dispatch(incCount(1))}>INC</button>
             <button onClick={() => dispatch(decCount(1))}>DEC</button>
             <button onClick={() => dispatch(resetCount(1))}>RESET</button>
         </div>
     )
}
