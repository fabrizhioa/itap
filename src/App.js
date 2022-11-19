import { Route, Routes, useNavigate } from "react-router-dom";

//pages

import Users from "./pages/Users";
import Public from "./pages/Public";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" end element={<Public />} />
        <Route path="/users/*" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
