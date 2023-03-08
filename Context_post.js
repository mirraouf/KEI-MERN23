import { createContext, useState } from "react";

const PostsContext=createContext();

function Provider1({children}){
const [count,setCount]=useState(0);

const values={
    count:count,
    incrementCount:()=>{
        setCount(count+1);
    }
};

return (
<PostsContext.Provider value={values}>
    {children}
    {/* <App /> */}
</PostsContext.Provider>

);

}

export {Provider1};
export default PostsContext;