import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Room from "./Room/Room";
import Join from "./Join/Join";
import Game from "./Room/Game/Game";
const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="room" element={<Room />}>
        <Route path=":roomId" element={<Game />} />
      </Route>
      <Route path="join" element={<Join />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
