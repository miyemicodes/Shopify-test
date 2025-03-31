import Header from "./Components/Header";
import Section2 from "./Components/Section-2";
import Section3 from "./Components/Section-3";

function App() {
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-7.5">
				<Header />
				<Section2 />
				<Section3/>
			</div>
		</>
	);
}

export default App;
