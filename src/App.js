import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main'
import Post from './pages/Post'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/post" element={<Post/ >} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
