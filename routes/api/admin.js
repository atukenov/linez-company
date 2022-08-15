const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");

const auth = require("../../middleware/auth");

const User = require("../../models/User");

// @route 	GET api/admin/user
// @access	Only Admin
// @desc    Get all users
router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.find().select("-password");
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// @route 	POST api/admin/register
// @access	Public
// @desc    User registration
router.post(
  "/register",
  auth,
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Password must be min 4 characters, one Lowercase and one Uppercase, one Number and one Special Character."
    ).isLength({ min: 4 }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      err = error.array()[0];
      return res.status(400).json({ error: err.msg });
    }

    const { name, email, password, mobile } = req.body;

    try {
      let user = await User.findOne({ email }).select("-password");

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      //get profile image from the internet with same email
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        name,
        email,
        username: email,
        mobile,
        avatar,
        password,
        roles: ["user"],
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      res.status(200).json(user);
      // const payload = {
      //   user: {
      //     id: user.id,
      //   },
      // };

      // jwt.sign(
      //   payload,
      //   process.env.SECRET_KEY,
      //   { expiresIn: 7200 },
      //   (err, token) => {
      //     if (err) throw err;
      //     res.json({ user, token });
      //   }
      // );
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error...");
    }
  }
);

module.exports = router;
