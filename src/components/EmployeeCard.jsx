const EmployeeCard = ({ name, position, department }) => {
    return (
      <div style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: "#f9f9f9"
      }}>
        <h3>{name}</h3>
        <p><strong>Position:</strong> {position}</p>
        <p><strong>Department:</strong> {department}</p>
      </div>
    );
  };
  
  export default EmployeeCard;
  