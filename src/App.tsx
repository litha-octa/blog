import { Box, Text } from "@chakra-ui/react";
import { Route, HashRouter, Routes } from "react-router-dom";
import { Home } from "./screen";

export const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
