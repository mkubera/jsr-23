const ShowName = ({ name, isPresent }) => {
  return (
    <div>
      <p>User's name: {name}</p>
      <p>Is present? {isPresent ? "Yes" : "No"} </p>
    </div>
  );
};

export default ShowName;
