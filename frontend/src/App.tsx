import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Heading from "./components/heading";
import Metrics_Summary from "./components/metrics_summary";
import ReviewPage from "./pages/ReviewForm.js";
import LoginPage from "./pages/Login.js";
import SignUpPage from "./pages/SignUp.js";
import CompanyForm from "./pages/CompanyForm";

function App() {
  return (
    <Router>
      {/* Header with navigation buttons */}
      <header className="container py-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          {/* Clickable title */}
          <div>
            <Link to="/" className="text-decoration-none text-dark">
              <h1 className="mb-1">Rate My Interview</h1>
            </Link>
            <p className="mb-0">Real interview experiences from real candidates</p>
          </div>

          {/* Action buttons */}
          <div className="d-flex align-items-center gap-2 mt-2 mt-md-0">
            <Link to="/write-review" className="btn btn-dark text-nowrap">
              + Write Review
            </Link>
            <Link to="/add-company" className="btn btn-dark text-nowrap">+ Add Company</Link>
            <Link to="/login" className="btn btn-dark text-nowrap">
              Login
            </Link>
            <Link to="/signup" className="btn btn-dark text-nowrap">
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Heading />
              <Metrics_Summary />
            </>
          }
        />
        <Route path="/write-review" element={<ReviewPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/add-company" element={<CompanyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
