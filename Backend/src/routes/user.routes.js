const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controllers");
const Auth = require("../middlewares/authentication");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../documents/profile_pics/"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const originalName = path.basename(
      file.originalname,
      path.extname(file.originalname)
    );
    const sanitizedOriginalName = originalName.replace(/[^a-zA-Z0-9]/g, "_"); // Sanitize the original name if necessary
    const newFilename = `${uniqueSuffix}-${sanitizedOriginalName}${path.extname(
      file.originalname
    )}`;
    cb(null, newFilename);
  },
});
const upload = multer({ storage: storage });

router.post("/admin-login", UserController.Adminlogin);

router.post(
  "/add-user",
  Auth.checkJwtToken,
  upload.single("profile_pic"),
  UserController.signup
);

router.post("/user-login", UserController.Userlogin);

router.put(
  "/edit-user/:id",
  upload.single("profile_pic"),
  Auth.checkJwtToken,
  UserController.editUser
);

router.delete(
  "/delete-user/:id",
  Auth.checkJwtToken,
  UserController.deleteUser
);

router.get("/get-all-users", Auth.checkJwtToken, UserController.getAllUsers);

router.post(
  "/reset-password",
  Auth.checkJwtToken,
  UserController.resetPassword
);

module.exports = router;
