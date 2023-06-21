import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Description from "./components/Description/Description";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="stories" element={<Main/>} />
        <Route path="stories/about" element={<Description/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
