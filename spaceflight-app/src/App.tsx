import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearchPage from "./components/MainSearchPage";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MainSearchPage />
    </div>
  );
}

export default App;
