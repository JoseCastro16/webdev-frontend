import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployeeThunk, deleteEmployeeThunk } from "../../store/thunks";
import EmployeeView from "../views/EmployeeView";

class EmployeeContainer extends Component {
  componentDidMount() {
    //getting course ID from url
    this.props.fetchEmployee(this.props.match.params.id);
  }
  render() {
    return (
      <EmployeeView
        employee={this.props.employee}
        deleteEmployee={this.props.deleteEmployee}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    employee: state.employee,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    deleteEmployee: (id) => dispatch(deleteEmployeeThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(EmployeeContainer);
