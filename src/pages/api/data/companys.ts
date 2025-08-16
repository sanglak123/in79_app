// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ICompany } from "@/server/db/models/companys";
import { Companys, Brands } from "@/server/db/models"
import type { NextApiRequest, NextApiResponse } from "next";


export interface Fail {
    error: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ICompany | Fail>,
) {
    if (req.method === "GET") {
        try {
            const company = await Companys.findOne({
                include: [{ model: Brands }]
            });
            if (company) {
                return res.status(200).json(company)
            }

        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }

    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
