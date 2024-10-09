import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
const Dashboard = React.lazy(() => {
  import("./components/Dashboard");
});
const Landing = React.lazy(() => {
  import("./components/Landing");
});

export function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loadding... "}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/landing"
            element={
              <Suspense fallback={"loadding...."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/landing");
        }}
      >
        landing
      </button>
    </div>
  );
}
