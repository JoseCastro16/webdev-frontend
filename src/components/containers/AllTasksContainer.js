import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllTasksThunk } from "../../store/thunks";
import AllTasksView from "../views/AllTasksView";

class AllTasksContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllTasks();
  }

  render() {
    return <AllTasksView allTasks={this.props.allTasks} />;
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allTasks: state.allTasks,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
  };
};

// Type check props;
AllTasksContainer.propTypes = {
  allTasks: PropTypes.array.isRequired,
  fetchAllTasks: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllTasksContainer);
