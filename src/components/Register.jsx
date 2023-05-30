import { useState } from "react";
import "./Register.css"; // Import the CSS file

const RegistrationForm = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [termsChecked, setTermsChecked] = useState(false);
	const [formErrors, setFormErrors] = useState({});

	const validateForm = () => {
		const errors = {};

		if (!email) {
			errors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = "Invalid email format";
		}

		if (!name) {
			errors.name = "Name is required";
		}

		if (!phone) {
			errors.phone = "Phone number is required";
		}

		if (!termsChecked) {
			errors.terms = "You must accept the terms and conditions";
		}

		setFormErrors(errors);

		return Object.keys(errors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validateForm()) {
			// Form submission logic goes here
			console.log("Form submitted!");
		}
	};
	return (
		<form className="registration-form" onSubmit={handleSubmit}>
			<h3>Please fill in the details</h3>
			<h6>
				{/* If rotarian navigate to google docs signup form */}
				<a href="">Are you a Rotarian?</a>
			</h6>
			<div className="form-group">
				<label>Email:</label>
				<input
					className={formErrors.email ? "error" : ""}
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{formErrors.email && (
					<span className="error-message">{formErrors.email}</span>
				)}
			</div>

			<div className="form-group">
				<label>Name:</label>
				<input
					className={formErrors.name ? "error" : ""}
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				{formErrors.name && (
					<span className="error-message">{formErrors.name}</span>
				)}
			</div>

			<div className="form-group">
				<label>Phone:</label>
				<input
					className={formErrors.phone ? "error" : ""}
					type="text"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				{formErrors.phone && (
					<span className="error-message">{formErrors.phone}</span>
				)}
			</div>

			<div className="form-group">
				<label className="checkbox-container">
					<input
						type="checkbox"
						checked={termsChecked}
						onChange={(e) => setTermsChecked(e.target.checked)}
						className="checkbox"
					/>
					I have read and agree to the terms and conditions
				</label>
				{formErrors.terms && (
					<span className="error-message">{formErrors.terms}</span>
				)}
			</div>

			<button type="submit" className="register-button">
				Register
			</button>
		</form>
	);
};

export default RegistrationForm;
