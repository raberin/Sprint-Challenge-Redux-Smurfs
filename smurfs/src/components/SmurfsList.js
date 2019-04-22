import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/index";

class SmurfsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSmurfs();
    console.log(this.props.smurfs);
  }

  render() {
    return (
      <div className="smurfsList">
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfsList);
