import { HashRouter, Routes, Route, Navigate } from "react-router";
import WeddingPage from "./pages/WeddingPage";
import { himanshuEvents } from "./data/himanshuEvents";
import { shremalEvents } from "./data/shremalEvents";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route
					path="/himanshu"
					element={<WeddingPage events={himanshuEvents} />}
				/>
				<Route
					path="/shremal"
					element={<WeddingPage events={shremalEvents} />}
				/>
				<Route path="/" element={<Navigate to="/himanshu" replace />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
