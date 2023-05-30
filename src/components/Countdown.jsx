import { useEffect, useState } from "react";
import "./Countdown.css";
const calculateRemainingCountdown = (targetDate) => {
	const now = new Date();
	const difference = targetDate - now;
	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	return {
		days,
		hours,
		minutes,
		seconds,
	};
};
const Countdown = () => {
	const [countdownTime] = useState(new Date(2023, 5, 3, 4));
	const [days, setDays] = useState();
	const [hours, setHours] = useState();
	const [minutes, setMinutes] = useState();
	const [seconds, setSeconds] = useState();
	//To set date
	useEffect(() => {
		//setTimeOut
		//Subtract the date
		let myInterval = () => {
			const { days, hours, minutes, seconds } =
				calculateRemainingCountdown(countdownTime);
			setDays(days);
			setHours(hours);
			setMinutes(minutes);
			setSeconds(seconds);
		};

		if (!days && !hours && !minutes && !seconds) setInterval(myInterval);
		//If the date arrives cancel  the timeout
		return clearInterval(myInterval);
	}, [days, hours, minutes, seconds, countdownTime]);
	//Start counting from the date

	return (
		<div className="Countdown_Card">
			<h1 className="Countdown_Title">Countdown</h1>
			<div className="Countdown_Clock">
				<div className="days">
					{days} <span>Days</span> :
				</div>
				<div className="hours">
					{hours} <span>Hours</span> :
				</div>
				<div className="minutes">
					{minutes} <span>Minutes</span> :
				</div>
				<div className="seconds">
					{seconds} <span>Seconds</span>
				</div>{" "}
			</div>
		</div>
	);
};

export default Countdown;
