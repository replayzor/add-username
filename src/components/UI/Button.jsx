import "./Button.css";

const Button = ({ type, children, onClick }) => {
	return (
		<button onClick={onClick} type={type || "button"} className="button">
			{children}
		</button>
	);
};

export default Button;
