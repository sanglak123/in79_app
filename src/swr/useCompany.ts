import { root_axios } from "@/server/api/config";
import { ICompany } from "@/server/db/models/companys";
import useSWR from "swr";
import HttpError from ".";


const fetcher = async (url: string) => {
    const res = await root_axios({
        method: "get",
        url: url
    });
    if (res.status === 200) {
        const company: ICompany = res.data;
        return company;
    }
    throw new HttpError("Not authorized!", 403);
};

export default function useCompany() {
    const { data, isLoading, mutate, error } = useSWR("/data/companys", fetcher);
    return {
        data, isLoading, mutate, error
    }
}