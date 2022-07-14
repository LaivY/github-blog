import { HashRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main'
import Post from './pages/Post'

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/post" element={<Post/ >} />
      </Routes>
    </HashRouter>
  );
}

export default App;
