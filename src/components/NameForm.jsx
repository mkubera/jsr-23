import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "no name",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.value}</p>
      </>
    );
  }
}

export default NameForm;
