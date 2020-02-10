import React from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends React.Component {
  render() {
    return (
      <React.Fragment>
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
