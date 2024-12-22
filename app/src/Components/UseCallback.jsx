
function UseCallback(increment) {

console.log("JOOO")
  return (
    <div>
      <button onClick={increment}>++++</button>
    </div>
  )
}
// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   // Regular increment function
//   const increment = () => {
//     setCount((prev) => prev + 1);
//   };

//   console.log("App rendered");

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <input
//         type="text"
//         placeholder="Type something..."
//         onChange={(e) => setText(e.target.value)}
//       />
//       <p>Typed Text: {text}</p>
//       <p>Count: {count}</p>
//       <Counter increment={increment} />
//     </div>
//   );
// }

// function Counter({ increment }) {
//   console.log("Counter rendered");
//   return (
//     <div>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default App;

export default UseCallback
