import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/pages/Account";
import Home from "./components/pages/Home";
import Introduce from "./components/pages/Introduce";

function App() {
  return <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/account" element={<Account />} />
        </Routes>
    </BrowserRouter>
  </>
}


export default App;