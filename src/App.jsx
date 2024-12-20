import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"; // Use Routes and Route
import Drench from "./games/Drench";
import PatternGenrator from "./games/PatternGenerator";
import TerrainGenerator from "./games/TerrainGenerator";
import FlipFind from "./games/FlipFind"; 

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/drench" element={<Drench />} />
        <Route path="/Pattern-generator" element={<PatternGenrator />} />
        <Route path="/terrain-generator" element={<TerrainGenerator />} />
        <Route path="/flip-find" element={<FlipFind/>}/>
       </Routes>
    </div>
  );
}
