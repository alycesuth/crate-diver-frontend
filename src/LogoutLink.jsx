import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LogoutLink() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      navigate("/", { state: { message: "Successfully logged out." } });
    });
  };

  return (
    <button onClick={handleClick} className="text-gray-300 hover:text-white transition-colors duration-200">
      Log Out
    </button>
  );
}
