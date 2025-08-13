import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LogInOutButton(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <LogoutButton />;
  } else {
    return <LoginButton />;
  }
}

export default LogInOutButton;
