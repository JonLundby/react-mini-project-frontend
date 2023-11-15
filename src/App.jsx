//npm create vite@latest (creates vite project)
//cd vite-app-name (use own project name)
//npm install (installs node)
//npm run dev (runs the app)
//npm install react-router-dom

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NamesDataPage from "./pages/NamesDataPage";
import FormPage from "./pages/FormPage";
import Nav from "./components/Nav";
// import Names from "./components/Names";
// import NamesForm from "./components/NamesForm";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/names" element={<NamesDataPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
    // <>
    //   <div>
    //     <p>Welcome to the front page</p>
    //     <Names />
    //     <NamesForm />
    //   </div>
    // </>
  );
}
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt=" React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;
