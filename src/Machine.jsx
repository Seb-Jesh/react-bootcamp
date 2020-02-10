import React from "react";

class Machine extends React.Component {
  render() {
    const colors = { fontSize: "50px", backgroundColor: "red" };
    return (
      <div>
        <p style={colors}>
          {this.props.s1} {this.props.s2} {this.props.s3}
        </p>
      </div>
    );
  }
}

export default Machine;
