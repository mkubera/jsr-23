const ShowName = ({ name, isPresent, inputType }) => {
  const pStyle = {
    textDecoration: "underline",
    color: "#0ca4fc",
    fontWeight: "bold",
  };

  const mappedList = [1, 2, 3].map((n, i) => <p key={i}>{n}</p>);

  let notPeopleButWeDontKnowWhatActually = isPresent ? (
    <h1>{mappedList}</h1>
  ) : (
    <h4>{mappedList}</h4>
  );

  // let JsxTag = (props) =>
  //   isPresent ? <h1>{props.children}</h1> : <h4>{props.children}</h4>;

  return (
    <div>
      <input
        type={
          ["text", "number", "email"].includes(inputType) ? inputType : "range"
        }
      />
      {/* <JsxTag>
        <article>
          <h2>START mapped list</h2>
          {mappedList}
          <h2>END mapped list</h2>
        </article>
      </JsxTag> */}
      {notPeopleButWeDontKnowWhatActually}
      <p style={isPresent ? pStyle : {}}>User's name: {name}</p>
      <p>Is present? {isPresent ? "Yes" : "No"} </p>
      {/* <ShowNameDetails name={name} /> */}
    </div>
  );
};

export default ShowName;
