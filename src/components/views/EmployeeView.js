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
          justifyContent: "flex-start",
          marginLeft: 30,
        }}
      >
        <Link to={`/employees`}>
          <BiArrowBack color="black" size={40} />
        </Link>
      </div>
      <div>
        <h1 style={{}}>{employee.id}</h1>
        <h1>
          {employee.firstname} {" " + employee.lastname}
        </h1>
        {employee.department ? (
          <h1>{employee.department}</h1>
        ) : (
          <h1>No Department</h1>
        )}

        <Link to={`/editemployee/${employee.id}`}>
          <BiEdit color="black" size={40} style={{ marginRight: 40 }} />
        </Link>
        <Link to={`/employees`}>
          <BiTrash
            color="black"
            size={40}
            onClick={() => deleteEmployee(employee.id)}
          />
        </Link>
      </div>
      <div className="employee-card-container">
        <div className="one">
          <h1>Tasks</h1>
        </div>
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
