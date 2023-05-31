import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="teste" element={<Layout />} />
          </Route>
        </Routes>

    </div>
  );
}

export default App;
