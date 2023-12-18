import "bootstrap/dist/css/bootstrap.min.css";
import jsonData from "./data.json";

import MainPage from "./MainPage";
import ListOfRob from "./ListOfRob";

import Robber from "./Robber";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToAnchor from "./Components/ScrollToAnchor";

function App() {
  return (
    <>
      <BrowserRouter basename="/robbers-react-app">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/robbers" element={<ListOfRob />} />
          <Route path="/James" element={<Robber rob_index="0" />} />
          <Route path="/Cassidy" element={<Robber rob_index="1" />} />
          <Route path="/Dillinger" element={<Robber rob_index="2" />} />
          <Route path="/Gillis" element={<Robber rob_index="3" />} />
          <Route path="/Kid" element={<Robber rob_index="4" />} />
        </Routes>
        <ScrollToAnchor />
      </BrowserRouter>
    </>
  );
}

export default App;
