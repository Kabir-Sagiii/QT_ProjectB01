import axios from "axios";
export function register(newuserdata, navigate) {
  axios
    .post("http://localhost:5000/auth/sign-up", newuserdata)
    .then((res) => {
      console.log(res.data);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    })
    .catch((error) => {
      alert("Something went wrong");
    });
}
