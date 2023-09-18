import { Route, HashRouter, Routes } from "react-router-dom";
import { Home, Profile, Album, MiniProject } from "./screen";

export const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Album" element={<Album />} />
          <Route path="/Mini-Program" element={<MiniProject />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
