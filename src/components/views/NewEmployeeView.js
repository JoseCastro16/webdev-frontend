import { Link } from "react-router-dom";
import { BiEdit, BiTrash, BiArrowBack } from "react-icons/bi";
import { CgAsterisk } from "react-icons/cg";

const NewEmployeeView = (props) => {
  const { handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: 30,
          }}
        >
          <Link to={`/employees`}>
            <BiArrowBack color="black" size={40} />
          </Link>
        </div>
        <div className="formTitle">
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Courier, sans-serif",
              fontSize: "20px",
              color: "#11153e",
            }}
          >
            New Employee
          </h2>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <CgAsterisk color={"darkred"} /> fields are required
        </div>
        <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ fontWeight: "bold" }}>
            <CgAsterisk color={"darkred"} /> First Name:{" "}
          </label>
          <input
            type="text"
            name="firstname"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ fontWeight: "bold" }}>
            <CgAsterisk color={"darkred"} /> Last Name:{" "}
          </label>
          <input
            type="text"
            name="lastname"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ fontWeight: "bold" }}>
            Department:{" "}
            <select name="department" onChange={(e) => handleChange(e)}>
              <option value={""}></option>
              <option value={"Operations"}>Operations</option>
              <option value={"Finance"}>Finance</option>
              <option value={"Sales"}>Sales</option>
              <option value={"Marketing"}>Marketing</option>
            </select>
          </label>

          <br />
          <br />

          <button type="submit">Submit</button>
          <br />
          <br />
        </form>
        {error !== "" && <p>{error}</p>}
      </div>
    </div>
  );
};

export default NewEmployeeView;
