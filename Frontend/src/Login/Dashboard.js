import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./auth";

const Dashboard = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    auth.logout(() => {
      navigate("/login");
    });
  };

  return (
    <div style={styles.container}>
      <h2>Welcome to the Dashboard!</h2>
      <button onClick={handleLogout} style={styles.button}>
        Logout
      </button>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  button: {
    padding: "10px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Dashboard;