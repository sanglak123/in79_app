import {  Images } from "@/server/db/models"
import type { NextApiRequest, NextApiResponse } from "next";


export interface Fail {
    error: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Images[] | Fail>,
) {
    if (req.method === "GET") {
        try {
            const listBanner = await Images.findAll({
                where: {
                    folder: "banners"
                }
            });
            return res.status(200).json(listBanner);

        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }

    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
