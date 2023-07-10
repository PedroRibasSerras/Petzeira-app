import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Feed from "./pages/Feed/Feed";
import ScheduleFeed from "./pages/Feed/ScheduleFeed/ScheduleFeed";
import HistoricFeed from "./pages/Feed/HistoricFeed/HistoricFeed";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="feed" element={<Feed />} />
            <Route path="feed/schedule" element={<ScheduleFeed />} />
            <Route path="feed/historic" element={<HistoricFeed />} />
            <Route path="picture" element={<Register />} />
            <Route path="picture/schedule" element={<Register />} />
            <Route path="picture/historic" element={<Register />} />
          </Route>
        </Routes>

    </div>
  );
}

export default App;
