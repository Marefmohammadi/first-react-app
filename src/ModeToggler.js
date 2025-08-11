function ModeToggler() {
    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is On</h1>;
    const lightMode = <h1>Light Mode is On</h1>;

    function handleClick() {
        darkModeOn = !darkModeOn;
        if(darkModeOn === true) {
            console.log("Dark Mode Activated");
        }else {
            console.log("Light Mode Activated");
        }
       
    };
    return (
        
        <div className="mode-toggler">
            {darkModeOn ? darkMode : lightMode}

            <button onClick={handleClick}>
                Click me 
                </button>

        </div>
    );

}
export default ModeToggler;