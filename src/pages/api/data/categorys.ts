import {  Categorys } from "@/server/db/models"
import type { NextApiRequest, NextApiResponse } from "next";


export interface Fail {
    error: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Categorys[] | Fail>,
) {
    if (req.method === "GET") {
        try {
            const categorys = await Categorys.findAll();
            return res.status(200).json(categorys);

        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }

    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
