import axios from "axios";
import toast from "react-hot-toast";
export function signinService(user, navigate, setToken) {
  axios
    .post("http://localhost:5000/auth/sign-in", user)
    .then((res) => {
      if (res.data.ok) {
        toast.success("User Successfully Signed-In", {
          duration: 1500,
          style: {
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
          },
        });
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        navigate("/home");
      } else {
        throw Error(res.data.error);
      }
    })
    .catch((error) => {
      toast.error(error.message, {
        duration: 4000,
        style: {
          backgroundColor: "red",
          color: "white",
          fontWeight: "bold",
        },
      });
    });
}
