import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center">
		<h1 className="mb-5 text-6xl text-white font-sans">
			Hendra Games
		</h1>
		<h2 className="mb-5 text-2xl text-white font-sans">
			is closed until Q3 of 2022
		</h2>
		<h4 className="mb-2 text-1xl text-white font-sans">
			Stay Tuned with our Discord
		</h4>

		<a href="https://discord.gg/dBnHZmC" className="bg-transparent hover:bg-yellow-600 text-white font-semibold py-2 px-4 border border-dark hover:border-transparent rounded">
			Link to Hendra Game's Discord
		</a>
    </div>
  );
}

export default App;
