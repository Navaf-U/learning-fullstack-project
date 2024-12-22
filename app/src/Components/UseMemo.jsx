// import  { useMemo, useState } from 'react'

// function UseMemo() {
//   const [count,setCount] = useState(0)
//   const [text,setText] = useState("")
//   const MemoCount = useMemo(()=>{
//     console.log("NO")
//     return count*10
//   },[text])
//   return (
//     <div>
//       <input  onChange={(e)=>setText(e.target.value)} type="text" placeholder='nigg-' name="" id="" className='border' />
//     <h1>{count}</h1>
//     <br />
//     <button onClick={()=>setCount(count+1)}>InC</button>
//     <br />
//     {MemoCount}   
//     </div>
//   )
// }

// export default UseMemo
