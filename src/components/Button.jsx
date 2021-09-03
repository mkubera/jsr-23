// onBtnClick - Callback Function
// label - String

const Button = ({ btnAlertMsg, label }) => {
  return <button onClick={btnAlertMsg}>{label}</button>;
};

export default Button;
