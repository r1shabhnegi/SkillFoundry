import { asyncHandler } from "../../middlewares/asyncHandler";
import { registerSchema } from "./auth.validation";
import * as authService from "./auth.service";

const aplicantRegistration = asyncHandler(async (req, res) => {
  const { success, data } = registerSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const { user } = await authService.aplicantRegistration(data);

  res.status(200).json({ message: "User registered successfully", user });
});

export { aplicantRegistration };
