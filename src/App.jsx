import{ Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Loginp/login"));
const Register = React.lazy(() => import("./pages/Register/Register"));
const Signup = React.lazy(()=> import("./pages/Signup/Signup"))
function App() {


  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/signup' element={<Signup/>}/>

        <Route path="/" element={<Home/>} />
        <Route path="*" element={<div>kya kya chahiye bhai tumko</div>} />
      </Routes>
    </Suspense>
    </>
  )
}
export default App;