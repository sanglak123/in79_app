import { Products } from "@/server/db/models"
import type { NextApiRequest, NextApiResponse } from "next";

export interface Fail {
    error: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Products | Fail>,
) {
    if (req.method === "GET") {
        const { link } = req.query;
        try {
            const product = await Products.findOne({
                where: {
                    link: link
                }
            });
            if (product) return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
