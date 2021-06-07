import * as jwt from "jsonwebtoken";

const expiresIn = "1y";
export function generateToken(payload: authenticationData): string {

    return jwt.sign(
        payload,
        process.env.JWT_KEY!,
        {
            expiresIn
        });
}

export function getTokenData(token: string): authenticationData {

    const result: authenticationData = jwt.verify(
        token,
        process.env.JWT_KEY!
        ) as authenticationData;

        return result;
}

export type authenticationData = {
    id: string
};