// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Users } from "@/server/db/models";
import type { NextApiRequest, NextApiResponse } from "next";
import { Fail } from "../data/companys";

type Data = {
    username: string;
    password: string;
};
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Fail>,
) {
    if (req.method === "POST") {
        const { username, password } = req.body;
        try {
            const user = await Users.findOne({
                where: {
                    username: username
                }
            });
            if (user) {
                return res.status(200).json({ username, password });
            } else {
                return res.status(404).json({ error: "User not found!" });
            }
        } catch (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
