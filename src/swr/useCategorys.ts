import { root_axios } from "@/server/api/config";
import { ICategory } from "@/server/db/models/categorys";
import useSWR from "swr";


const fetcher = async (url: string) => {
    const res = await root_axios({
        method: "get",
        url: url
    });
    if (res.status === 200) {
        const categorys: ICategory[] = res.data;
        return categorys;
    }
    const error: any = new Error("Not authorized!");
    error.status = 403;
    throw error;
};

export default function useCategorys() {
    const { data, isLoading, mutate, error } = useSWR("/data/categorys", fetcher);
    return {
        data, isLoading, mutate, error
    }
}