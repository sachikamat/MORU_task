import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Users from "./Card";

function App() {
  return (
   <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Users />} />
          </Routes>
      </Router>
   </>
  );
}

export default App;
