/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import Register from "../Register";
import "./RegisterModal.css";
import Card from "./Card";
const Backdrop = ({ onRegisterClick }) => {
	return (
		<div
			className="backdrop"
			onClick={() => {
				onRegisterClick();
			}}
		></div>
	);
};
const ModalOverlay = () => {
	return (
		<div className="modal">
			<Card>
				<Register />
			</Card>
		</div>
	);
};

const RegisterModal = ({ onRegisterClick }) => {
	return (
		<>
			{createPortal(
				<Backdrop onRegisterClick={onRegisterClick} />,
				document.getElementById("backdrop-root")
			)}
			{createPortal(<ModalOverlay />, document.getElementById("overlay-root"))}
		</>
	);
};

export default RegisterModal;
