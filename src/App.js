import { Route, Routes } from "react-router-dom";

//pages

import Users from "./pages/Users";
import Public from "./pages/Public";
import Clients from "./pages/Clients";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" end element={<Public />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/clients/*" element={<Clients />} />
      </Routes>
    </>
  );
}

export default App;
