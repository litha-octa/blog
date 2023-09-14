import { Route, HashRouter, Routes } from "react-router-dom";
import { Home, Profile } from "./screen";

export const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
