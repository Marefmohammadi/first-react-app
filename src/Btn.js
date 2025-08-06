//function Btn(){
//   const ClickHandler = () => { console
//    return (
//        <button onClick={ClickHandler}>
//            Click Me  </button>
//    )
//}
//export default Btn;

function Btn(){
   const ClickHandler = () => { console.log("Mouse overd") };
    return (
        <button onMouseOver={ClickHandler}>
            Click Me  </button>
    );
};
export default Btn;