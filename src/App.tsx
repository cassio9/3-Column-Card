import "./App.css";
import SedanLogo from "./assets/icon-sedans.svg";
import SUVLogo from "./assets/icon-suvs.svg";
import LuxuryLogo from "./assets/icon-luxury.svg";

function App() {
	return (
		<div className="bg-VeryLightGray min-h-screen max-h-fit flex justify-center items-center text-TransparentWhite p-8">
			<main className="max-w-[18rem] lg:max-w-4xl font-LexendDeco bg-gray-400 rounded-xl lg:flex">
				<div className="bg-BrightOrange p-8 rounded-t-xl lg:rounded-none lg:rounded-l-xl lg:flex-1 lg:px-12">
					<img src={SedanLogo} alt="Sedan logo" />
					<h1 className="text-2xl uppercase tracking-tighter my-4  ">Sedans</h1>
					<p>
						Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in
						the city or on your next road trip.
					</p>
					<button className="py-2 px-8 mt-6 rounded-3xl bg-VeryLightGray text-BrightOrange hover:bg-BrightOrange border-2 border-VeryLightGray hover:text-white">
						Learn More
					</button>
				</div>
				<div className="bg-DarkCyan p-8 lg:px-11 lg:flex-1">
					<img src={SUVLogo} alt="SUV logo" />
					<h1 className="text-2xl uppercase tracking-tighter my-4">SUVs</h1>
					<p>
						Take an SUV for its spacious interior, power, and versatility. Perfect for your next
						family vacation and off-road adventures.
					</p>
					<button className="py-2 px-8 mt-6 rounded-3xl bg-VeryLightGray text-DarkCyan border-2 border-VeryLightGray hover:bg-DarkCyan hover:text-white">
						Learn More
					</button>
				</div>
				<div className="bg-VeryDarkCyan p-8 lg:px-12 rounded-b-xl lg:rounded-none lg:rounded-r-xl lg:flex-1">
					<img src={LuxuryLogo} alt="Luxury logo" />
					<h1 className="text-2xl uppercase tracking-tighter my-4">Luxury</h1>
					<p>
						Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of
						a luxury rental and arrive in style.
					</p>
					<button className="py-2 px-8 mt-6 rounded-3xl bg-VeryLightGray text-VeryDarkCyan border-2 border-VeryLightGray hover:bg-VeryDarkCyan hover:text-white">
						Learn More
					</button>
				</div>
			</main>
		</div>
	);
}

export default App;
