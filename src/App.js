import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Link,
} from "react-router-dom";
import { useState } from "react";

function App() {
	const navItems = ["Home"];
	const [score, setScore] = useState(0);

	return (
		<Router>
			<Navbar siteName="Quiz" navItems={navItems} />
			{/* <h1>Quizzer</h1> */}
			<div className="main-container">
				{/* <div className="bg"> */}
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route
						path="/quiz"
						element={<Quiz score={score} setScore={setScore} />}></Route>
					<Route path="/result" element={<Result score={score} />}></Route>
				</Routes>
			</div>
			{/* </div> */}
		</Router>
	);
}

export default App;
