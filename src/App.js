import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Users } from "./components/pages/Users";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>AWS-SAMPLE</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">HOME</Link> | <Link to="/users">USERS</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};
