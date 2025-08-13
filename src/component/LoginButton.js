import Photo from '../assets/fonts/images/Photo.jpg'
function LoginButton() {
  return (
    <div>
        <button type="submit">Login</button>
        <img src={Photo} alt="A picture of User" />
     
   </div>
  );
}
export default LoginButton;
