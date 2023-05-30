import "./App.css";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import Logo1 from "./assets/Logo-2.png";
import Logo2 from "./assets/Logo-3.png";
import Logo3 from "./assets/Logo-4.png";
import FacebookLogo from "./assets/icons8-facebook.svg";
import InstagramLogo from "./assets/icons8-instagram.svg";
import { useState } from "react";
import RegisterModal from "./components/UI/RegisterModal";

function App() {
	const [registerClicked, setRegisterClicked] = useState(false);
	const onRegisterClick = () => {
		setRegisterClicked((prev) => !prev);
	};
	return (
		<div className="App">
			{registerClicked ? (
				<RegisterModal onRegisterClick={onRegisterClick} />
			) : (
				<>
					<div className="Hero_Section">
						<Hero onRegisterClick={onRegisterClick} />
						<Countdown />
					</div>
					<div className="About_Section">
						<h1>About Us</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Molestias, nulla. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Voluptas saepe, explicabo reprehenderit nostrum
							repellat odit laboriosam fuga voluptates consequatur in.
						</p>
					</div>
					<div className="Our_Terms">
						<h1>Our Terms and Conditions</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
							labore eum enim. Sapiente cupiditate, sunt nesciunt voluptates
							nisi voluptatum esse vel ipsa fugit accusantium eum adipisci?
							Asperiores incidunt laboriosam perspiciatis possimus similique!
							Dolorum cupiditate est saepe aut beatae id autem consequatur
							eveniet impedit adipisci sint excepturi commodi totam, et tenetur?
						</p>
					</div>
					<footer>
						<div className="Logo">
							<div className="Footer_Logo">
								<img src={Logo1} alt="hi" />
							</div>
							<div className="Footer_Logo">
								<img src={Logo2} alt="hi" />
							</div>
							<div className="Footer_Logo">
								<img src={Logo3} alt="hi" />
							</div>
						</div>
						<div className="Footer_Contact">
							<h3>For more information</h3>
							<div className="MediaLinks">
								<a href="#">
									<img src={FacebookLogo} alt="facebook" />
								</a>
								<a href="#">
									<img src={InstagramLogo} alt="Instagram" />
								</a>
							</div>
							<div className="Email_Contact">
								<h4>Or</h4>
								<h3>Email us at:</h3>
								<p>abc@gmail.com</p>
							</div>
						</div>
					</footer>
				</>
			)}
		</div>
	);
}

export default App;
