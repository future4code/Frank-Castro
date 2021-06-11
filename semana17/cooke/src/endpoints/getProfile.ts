import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { userInfo } from "../types";
import { authenticationData } from "../services/authenticator";

export default async function getProfile(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const access_token = req.headers.authorization! as string;
    const tokenData: authenticationData | null = getTokenData(access_token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    const user = await connection("cookes")
      .select()
      .where({ id: tokenData.id });

    const profileInfo: userInfo = {
      id: tokenData.id,
      name: user[0].name,
      email: user[0].email,
    };

    res.send(profileInfo);
  } catch (error) {
    res.send({ message: error.message });
  }
}