import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            element={
              <div>
                NAVBAR
                <Outlet />
              </div>
            }
          >
            <Route path="home" element={<div>Me in home </div>} />
            <Route path="about" element={<div>Me in about </div>} />
            <Route path="contact" element={<div>Me in contact </div>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
