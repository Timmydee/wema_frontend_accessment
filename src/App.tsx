import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import { FormProvider } from "./context/FormProvider";
import Verifiers from "./pages/Dashboard/Verifiers";
import Deals from "./pages/Dashboard/Deals";
import Transactions from "./pages/Dashboard/Transactions";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/global/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <FormProvider>
                  <SignUp />
                </FormProvider>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard/*" element={<Dashboard />}>
                <Route path="verifiers" element={<Verifiers />} />
                <Route path="deals" element={<Deals />} />
                <Route path="transactions" element={<Transactions />} />
              </Route>
            </Route>
          </Routes>
        </Router>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#4caf50",
              color: "#fff",
            },
            error: {
              style: {
                background: "#ff4444",
              },
            },
          }}
        />
      </AuthProvider>
    </>
  );
}

export default App;
