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
          <BiArrowBack color="white" size={40} />
        </Link>
      </div>
      <div>
        <h1>First Name: {employee.firstname}</h1>
        <h1>Last Name: {employee.lastname}</h1>
        <h1>Department: {employee.department}</h1>
        <Link to={`/editemployee/${employee.id}`}>
          <BiEdit color="white" size={40} style={{ marginRight: 10 }} />
        </Link>
      </div>
    </div>
  );
};

export default EmployeeView;
