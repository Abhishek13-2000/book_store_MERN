import Home from "./Home/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses"
import Signup from "./components/Signup"
import { useAuth } from "./context/AuthProvider"


function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);

  return (
    <>
      {/* <Home/> */}
      {/* <Course/> */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={ authUser ? <Courses/> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
