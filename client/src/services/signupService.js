import axios from "axios";
export function register(newuserdata) {
  axios
    .post("http://localhost:5000/auth/sign-up", newuserdata)
    .then((res) => {
      console.log(res.data);
      alert("User Created");
    })
    .catch((error) => {
      alert("Something went wrong");
    });
}
