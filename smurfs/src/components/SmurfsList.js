import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/index";

import Smurf from "./Smurf";

class SmurfsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getSmurfs();
    console.log(this.props.smurfs);
  }

  render() {
    return (
      <ul className="smurfsList">
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfsList);
