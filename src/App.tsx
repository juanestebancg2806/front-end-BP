import { useState } from "react";
import "./App.css";
import logo from "./assets/images/BP-logo.svg";

const App: React.FC = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<div>
				<img src={logo} className="logo" alt="BP logo" />
			</div>
			<h1>Website under development</h1>
			<div className="card">
				<button
					onClick={() => {
						setCount((count) => count + 1);
					}}
				>
					Click here to count: {count}
				</button>
			</div>
		</div>
	);
};

export default App;
