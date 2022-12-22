import { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { BiEdit, BiTrash, BiArrowBack } from "react-icons/bi";
import { fetchEmployeeThunk, editEmployeeThunk } from "../../store/thunks";

class EditEmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      department: "",
      redirect: false,
      redirectId: null,
    };
  }

  componentDidMount() {
    //getting course ID from url
    this.props.fetchEmployee(this.props.match.params.id);
    this.setState({
      firstname: this.props.employee.firstname,
      lastname: this.props.employee.lastname,
      department: this.props.employee.department,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    //get new info for course from form input
    let employee = {
      id: this.props.employee.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      department: this.state.department,
    };

    await this.props.editEmployee(employee);

    this.setState({
      redirect: true,
      redirectId: this.props.employee.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    //go to single course view of the edited course
    if (this.state.redirect) {
      return <Redirect to={`/employee/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: 30,
          }}
        >
          <Link to={`/employee/` + this.props.employee.id}>
            <BiArrowBack color="black" size={40} />
          </Link>
        </div>
        <form
          style={{ textAlign: "center" }}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <label style={{ color: "black", fontWeight: "bold" }}>
            First Name:{" "}
          </label>
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={(e) => this.handleChange(e)}
          />
          <br />

          <label style={{ color: "black", fontWeight: "bold" }}>
            Last Name:{" "}
          </label>
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={(e) => this.handleChange(e)}
          />
          <br />

          <label style={{ color: "black", fontWeight: "bold" }}>
            Department:{" "}
            <select name="department" onChange={(e) => this.handleChange(e)}>
              {this.props.employee.department ? (
                <option value={this.props.employee.department}>
                  {this.props.employee.department} (current)
                </option>
              ) : (
                <option value=""></option>
              )}
              <option value={"Operations"}>Operations</option>
              <option value={"Finance"}>Finance</option>
              <option value={"Sales"}>Sales</option>
              <option value={"Marketing"}>Marketing</option>
            </select>
          </label>

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    employee: state.employee,
  };
};

const mapDispatch = (dispatch) => {
  return {
    editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(EditEmployeeContainer);
