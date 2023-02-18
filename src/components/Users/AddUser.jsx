import { useState } from "react";

// components
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

// styles
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [errorModal, setErrorModal] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();

		// Check if entered username or age is empty or whitespace characters.
		// If so, return without executing any further code.
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setErrorModal({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values)",
			});
			return;
		}

		// Check if entered age is less than or equal to 0.
		// If so, return without executing any further code.
		if (+enteredAge <= 0) {
			setErrorModal({
				title: "Invalid input",
				message: "Please enter a valid age (> 0).",
			});
			return;
		}
		// Call onAddUser function with entered username and age as arguments.
		onAddUser(enteredUsername, enteredAge);

		// Reset entered username and age to empty strings.
		setEnteredUsername("");
		setEnteredAge("");
	};

	const userChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	const errorHandler = () => {
		setErrorModal(false);
	};

	return (
		<Wrapper>
			{errorModal && (
				<ErrorModal
					onErrorModal={errorHandler}
					title={errorModal.title}
					message={errorModal.message}
				/>
			)}
			<Card className="input">
				<form onSubmit={addUserHandler}>
					<label>
						Username
						<input
							value={enteredUsername}
							name="username"
							type="text"
							onChange={userChangeHandler}
						/>
					</label>
					<label>
						Age (Years)
						<input
							value={enteredAge}
							name="age"
							type="number"
							onChange={ageChangeHandler}
						/>
					</label>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
