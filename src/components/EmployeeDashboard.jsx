import EmployeeCard from "./EmployeeCard";
import Header from "./Header";

const EmployeeDashboard = () => {
  const employees = [
    { id: 1, name: "Alice Johnson", position: "Software Engineer", department: "Development" },
    { id: 2, name: "Bob Smith", position: "Product Manager", department: "Product" },
    { id: 3, name: "Charlie Brown", position: "Designer", department: "Design" },
  ];

  return (
    <div style={{
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px"
    }}>
      <Header />
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          position={employee.position}
          department={employee.department}
        />
      ))}
    </div>
  );
};

export default EmployeeDashboard;
