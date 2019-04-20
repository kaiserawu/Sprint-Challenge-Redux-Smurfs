import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions';

class Smurf extends React.Component {
  render() {
    return (
      <div className='smurf'>
        <h2>{this.props.name}</h2>
        <p>{this.props.age} years</p>
        <p>{this.props.height}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}

export default connect(mapStateToProps, {  })(Smurf)