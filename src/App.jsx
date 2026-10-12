// App.jsx
// Main entry point of the React app, sets up routing and global providers.

import ProjectRoutes from "./routes/ProjectRoutes";
import "./globals.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import IdleSplashCursor from "./components/ui/idle-splash-cursor/IdleSplashCursor";
import Reb2bTracker from "./components/analytics/Reb2bTracker";

const App = () => {
  return (
    <div className="app">
      {/* <Reb2bTracker /> */}
      <Toaster position="top-center" />
      <IdleSplashCursor />
      <BrowserRouter>
        <ProjectRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
