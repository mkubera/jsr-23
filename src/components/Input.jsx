// onInputChange - Callback Function
// placeholder - String

const Input = ({ onInputChange, placeholder }) => {
  return (
    <input onInput={onInputChange} placeholder={placeholder} type="text" />
  );
};

export default Input;
