// components
import Card from "../UI/Card";

// styles
import "./UsersList.css";

function UsersList({ users, className }) {
	return (
		<Card className={`users ${className}`}>
			<ul>
				{users.map((user) => {
					return (
						<li key={user.id}>
							{user.username} - ({user.age} years old)
						</li>
					);
				})}
			</ul>
		</Card>
	);
}

export default UsersList;
