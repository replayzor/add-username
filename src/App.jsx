import { useState } from "react";

// components
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [userData, setUserData] = useState([]);

	// addUserHandler takes in a username and age
	// and updates the state with the new user data.
	const addUserHandler = (uName, uAge) => {
		// Update state with the new user data by spreading the
		// previous userData array and adding a new object
		// with the new username, age, and id properties.
		setUserData((prevUserData) => {
			return [
				...prevUserData,
				{ username: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};

	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={userData} />
		</>
	);
}

export default App;
