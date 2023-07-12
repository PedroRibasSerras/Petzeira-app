import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Feed from "./pages/Feed/Feed";
import ScheduleFeed from "./pages/Feed/ScheduleFeed/ScheduleFeed";
import HistoricFeed from "./pages/Feed/HistoricFeed/HistoricFeed";
import Picture from "./pages/Picture/Picture";
import SchedulePicture from "./pages/Picture/SchedulePicture/ScheduleFeed";
import HistoricPicture from "./pages/Picture/HistoricPicture/HistoricPicture";
import Modules from "./pages/Modules/Modules";
import Calibre from "./pages/Calibre/Calibre";
import MeasurementsFeed from "./pages/Feed/MeasurementsFeed/MeasurementsFeed";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="modulos" element={<Modules />} />
            <Route path="feed" element={<Feed />} />
            <Route path="feed/schedule" element={<ScheduleFeed />} />
            <Route path="calibre" element={<Calibre />} />
            <Route path="feed/historic" element={<HistoricFeed />} />
            <Route path="feed/measurements" element={<MeasurementsFeed />} />
            <Route path="picture" element={<Picture />} />
            <Route path="picture/schedule" element={<SchedulePicture />} />
            <Route path="picture/historic" element={<HistoricPicture />} />
          </Route>
        </Routes>

    </div>
  );
}

export default App;
