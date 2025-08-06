function Promo(props) {
  const styles = {
    textAlign: "center",
    display: "flex",
    color: "tomato",
    fontsize: "20px",
    flexDirection: "column",
  }
  return (
    <div className="promo-section">
        <div>
            <h1 style={styles}>{props.heading}</h1>
        </div>
        <div>
            <h2>{props.promoSubheading}</h2>
        </div>
    </div>
  );
};
export default Promo;