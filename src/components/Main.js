function Main() {
    const mainStyle = {
        textAlign: "center",
        disply: "flex",
        flexDirection: "column",
        backgroundColor: "lightblue",
        padding: "20px",    
        border: "2px solid blue",
        borderRadius: "10px",
    };
  return (
    <div className="main" style={mainStyle}>
      <h1>Hello from Main</h1>
    </div>
  );
};
export default Main;