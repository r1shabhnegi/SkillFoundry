import { asyncHandler } from "../../middlewares/asyncHandler";

const register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({ message: "User registered successfully" });
});

export { register };
