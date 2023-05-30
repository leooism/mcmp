/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import VideoPlayer from "./VideoPlayer";
import "./Hero.css";
import Logo from "../assets/Logo-1.png";
const Hero = ({ onRegisterClick }) => {
	const handleRegisterClick = () => {
		onRegisterClick();
	};
	return (
		<div className="Hero">
			<div className="Hero_Header">
				<div className="Logo_Container">
					<img src={Logo} alt="logo" />
				</div>
			</div>

			<VideoPlayer />
			<div className="Hero_Text">
				<h1 className="Hero_Text--description">
					<span className="red_text">We are proud to</span>
					<br />
					serve our country.{" "}
					<span className="blue_text">
						We are
						<br></br>
						committed to{" "}
					</span>
					making it a<br></br>
					<span className="red_text">better place for all of</span>
					<br />
					our citizens.
				</h1>
				<button onClick={handleRegisterClick}>Register</button>
			</div>
		</div>
	);
};

export default Hero;
