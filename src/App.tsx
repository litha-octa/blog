import { Route, HashRouter, Routes } from "react-router-dom";
import { Home, Profile, Album } from "./screen";

export const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Album" element={<Album />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
