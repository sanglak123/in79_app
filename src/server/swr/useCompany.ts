import useSWR from "swr";
import { root_axios } from "../api/config"
import { ICompany } from "../db/models/companys";

const fetcher = async (url: string) => {
    const res = await root_axios({
        method: "get",
        url: url
    });
    if (res.status === 200) {
        const company: ICompany = res.data;
        return company;
    }
    const error: any = new Error("Not authorized!");
    error.status = 403;
    throw error;
};

export default function useCompany() {
    const { data, isLoading, mutate, error } = useSWR("/data/companys", fetcher);
    return {
        data, isLoading, mutate, error
    }
}