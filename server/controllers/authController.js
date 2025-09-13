const UserModel = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const secret_key =
  "dlkfjbvdjkflbvdjfbvjdlkfbvldkfbvldfkbvlskdnkladnweoihdeoiwfheiuhfsdjkbxweugduwegdbkjwjabxdkjwsa";
function signup(req, res) {
  const newUser = req.body;

  const newuser = new UserModel(newUser);
  newuser
    .save()
    .then(() => {
      res.json({ ok: true, result: "User Created Successfully" });
    })
    .catch(() => {
      res.json({ ok: false, result: "Failed to Create User" });
    });
}

function signin(req, res) {
  var { email, password } = req.body;

  UserModel.find()
    .then((users) => {
      const result = users.find((user) => {
        return user.email === email && user.password === password;
      });

      if (result) {
        jwt.sign({ email, password }, secret_key, (error, token) => {
          if (error) {
            throw Error("Failed to generate Token");
          } else {
            res.json({ ok: true, message: "User is Valid", token: token });
          }
        });
      } else {
        throw Error("User is Invalid");
      }
    })
    .catch((error) => {
      res.send({ ok: false, error: error.message });
    });
}

module.exports = { signin, signup };
