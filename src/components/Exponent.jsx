
const Exponent = ({ num, exponent }) => {
  let calcul = "";
  for (let i = 0; i < exponent; i++) {
    calcul += num;
    if (i < exponent - 1) calcul += " * ";
  }

  return (

    <div className="exponent-counter-container">
    <p className="exponent-label">n{exponent}</p>
    <p className="exponent-result">{calcul} = <span className="total">{num ** exponent}</span></p>
  </div>
  );
};


export default Exponent;