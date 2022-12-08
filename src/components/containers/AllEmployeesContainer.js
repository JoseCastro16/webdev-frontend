import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchAllEmployeesThunk,
  deleteEmployeeThunk,
} from "../../store/thunks";
import AllEmployeesView from "../views/AllEmployeesView";

class AllEmployeesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllEmployees();
  }

  deleteEmployee = (employee) => {
    this.props.deleteEmployee(employee.id);
  };

  render() {
    return (
      <AllEmployeesView
        allEmployees={this.props.allEmployees}
        deleteEmployee={this.props.deleteEmployee}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allEmployees: state.allEmployees,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllEmployees: () => dispatch(fetchAllEmployeesThunk()),
    deleteEmployee: (id) => dispatch(deleteEmployeeThunk(id)),
  };
};

// Type check props;
AllEmployeesContainer.propTypes = {
  allEmployees: PropTypes.array.isRequired,
  fetchAllEmployees: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllEmployeesContainer);
