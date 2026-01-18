import React from "react";
// import useNavigate from "react-router-dom";

function Logout() {
  const handleLogout = () => {
    const navigate = useNavigate();
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.setItem("isLoggedIn", false);
      localStorage.removeItem("username");
      navigate("/auth");
      alert("Logout Successful.");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleLogout}
        className="mt-10 bg-green-700"
        style={{
          padding: "12px 30px",
          borderRadius: "8px",
          border: "1px solid #98bf8cff",
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Logout;
