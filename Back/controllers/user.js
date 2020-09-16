const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports.create = function (req, res) {
  console.log(req.body);
  if (req.body.password != req.body.confirm_password) {
    return res.status(500).json({
      message: "Password is not mached",
    });
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      return res.status(500).json({
        message: "There is an error",
      });
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          return res.status(500).json({
            message: "There is an error",
          });
        }

        return res.status(200).json({
          success: true,
          message: "User is created SuccessFully",
        });
      });
    } else {
      return res.status(500).json({
        message: "Internal Server error",
      });
    }
  });
};

// this is for signin for a user so keep going in

module.exports.createSession = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user || user.password != req.body.password) {
      return res.json(422, {
        success: false,
        message: "Invalid username or password",
      });
    }

    return res.json(200, {
      success: true,
      message: "Sign in successful, here is your token, please keep it safe!",
      data: {
        token: jwt.sign(user.toJSON(), "codeial", {
          expiresIn: "100000000000000000000",
        }),
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports.emailVerifire = function (req, res) {
  console.log("your email is ", req.params.email);
  User.findOne({ email: req.params.email }, function (err, user) {
    if (err) {
      console.log("there is an error");
    }

    if (user) {
      console.log(user);
    }
  });

 

  return res.json({
    status: true,
  });
};
