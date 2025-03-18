
import { Route, Routes } from "react-router-dom";
import Login from "./Componants/Login";
import AdminPage from "./Componants/AdminPage";
function App() {


  return (

    <>
      <Routes>


        <Route path="/" element={<Login />} />
        <Route path="/Admin" element={<AdminPage />} />



      </Routes>

    </>

  );
}

export default App;
