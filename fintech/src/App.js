import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ArrayMap from "./components/ArrayMap";
import AxiosTest from "./pages/AxiosTest";
import NewsApiPage from "./pages/NewsApiPage";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/axiosTest" element={<AxiosTest/>}></Route>
        <Route path="/newsApi" element={<NewsApiPage/>}></Route>
        <Route path="/" element={<AuthPage/>}></Route>
        <Route path="authResult" element={<AuthResultPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;