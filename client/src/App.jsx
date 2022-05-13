import "./App.scss";
import { ToolBar } from "./components/ToolBar/ToolBar";
import { Settings } from "./components/Settings/Settings";
import { Canvas } from "./components/Canvas/Canvas";
function App() {
  return (
    <div className="App">
      <ToolBar />
      <Settings />
      <Canvas />
    </div>
  );
}

export default App;
