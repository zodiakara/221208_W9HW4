import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ArticleDetailsPage from "./components/ArticleDetailsPage";
import MainSearchPage from "./components/MainSearchPage";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<MainSearchPage />} />
          <Route path="/details/:id" element={<ArticleDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
