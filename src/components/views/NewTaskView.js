import { Link } from "react-router-dom";
import { BiEdit, BiTrash, BiArrowBack } from "react-icons/bi";
import { CgAsterisk } from "react-icons/cg";

const NewTaskView = (props) => {
  const { handleChange, handleSubmit, error, allEmployees } = props;
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
          <Link to={`/tasks`}>
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
            New Task
          </h2>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <CgAsterisk color={"darkred"} /> fields are required
        </div>
        <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ fontWeight: "bold" }}>
            <CgAsterisk color={"darkred"} /> Description:{" "}
          </label>
          <textarea
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ fontWeight: "bold" }}>
            <CgAsterisk color={"darkred"} /> Priority:{" "}
            <select name="priority" onChange={(e) => handleChange(e)}>
              <option value={""}></option>
              <option value={"High"}>High</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Low"}>Low</option>
            </select>
          </label>

          <br />
          <br />

          <label style={{ fontWeight: "bold" }}>
            <CgAsterisk color={"darkred"} /> Status :{" "}
            <select name="status" onChange={(e) => handleChange(e)}>
              <option value={""}></option>
              <option value={"Completed"}>Completed</option>
              <option value={"Not Completed"}>Not Completed</option>
            </select>
          </label>

          <br />
          <br />

          <label style={{ fontWeight: "bold" }}>
            Employee :{" "}
            <select name="employeeId" onChange={(e) => handleChange(e)}>
              <option value={""}></option>
              {props.allEmployees.map((employee) => {
                return (
                  <option value={employee.id} key={employee.id}>
                    {employee.firstname + " " + employee.lastname}
                  </option>
                );
              })}
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

export default NewTaskView;
