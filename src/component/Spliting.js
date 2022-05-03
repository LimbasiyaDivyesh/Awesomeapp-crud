import React, { Suspense } from "react";

const User = React.lazy(()=>import('./User'))
const Spliting = ()=>{
    return(
        <Suspense fallback={<div> WAIT </div>}>
            <User/>
        </Suspense>
    )
}
export default Spliting;
