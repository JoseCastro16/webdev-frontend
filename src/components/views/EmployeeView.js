import { Link } from "react-router-dom";
import { BiEdit, BiTrash, BiArrowBack } from "react-icons/bi";
import TaskCard from "../TaskCard";

const EmployeeView = (props) => {
  const { employee, deleteEmployee } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <Link to={`/employees`}>
          <BiArrowBack color="black" size={40} />
        </Link>
        <Link to={`/editemployee/${employee.id}`}>
          <BiEdit color="#0096FF" size={40} />
        </Link>
        <Link to={`/employees`}>
          <BiTrash
            color="red"
            size={40}
            onClick={() => deleteEmployee(employee.id)}
          />
        </Link>
      </div>
      <div>
        <h1
          style={{
            fontWeight: "bold",
            fontFamily: "Courier, sans-serif",
            fontSize: "2.5rem",
            color: "#11153e",
          }}
        >
          Employee {employee.id}
        </h1>
        <h2 style={{ textDecoration: "underline" }}>Name</h2>
        <h1>
          {employee.firstname} {" " + employee.lastname}
        </h1>
        <h2 style={{ textDecoration: "underline" }}>Department</h2>
        {employee.department ? <h1>{employee.department}</h1> : <h1>N/A</h1>}
        <h2
          style={{
            textDecoration: "underline",
          }}
        >
          Tasks
        </h2>
      </div>
      <div className="employee-card-container">
        {employee.tasks ? (
          employee.tasks
            .sort(function (a, b) {
              return a.id - b.id;
            })
            .map((task) => {
              return <TaskCard key={task.id} task={task} />;
            })
        ) : (
          <h1>No Current Tasks</h1>
        )}
      </div>
    </div>
  );
};

export default EmployeeView;
