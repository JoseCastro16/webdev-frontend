import { Link } from "react-router-dom";
import { BiEdit, BiTrash, BiArrowBack } from "react-icons/bi";

const EmployeeView = (props) => {
  const { employee } = props;
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
        <BiTrash color="black" size={40} />
      </div>
    </div>
  );
};

export default EmployeeView;
