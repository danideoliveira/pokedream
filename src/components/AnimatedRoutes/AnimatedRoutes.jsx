import { Route, Routes, useLocation } from "react-router-dom";
import HomeBase from "../../pages/HomeBase/HomeBase";
import DreamTeam from "../../pages/DreamTeam/DreamTeam";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeBase />} />
        <Route path="/dream-team" element={<DreamTeam />} />
      </Routes>
    </AnimatePresence>
  );
}
