import "./App.scss";
import { ToolBar } from "./components/ToolBar/ToolBar";
import { Settings } from "./components/Settings/Settings";
import { Canvas } from "./components/Canvas/Canvas";
//nav
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/:id"
            element={
              <>
                <ToolBar />
                <Settings />
                <Canvas />
              </>
            }
          />
          <Route
            path="*"
            element={
              <Navigate replace to={`${(+new Date()).toString(16)}`} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
