import { root_axios } from "@/server/api/config";
import { ICategory } from "@/server/db/models/categorys";
import useSWR from "swr";
import HttpError from ".";


const fetcher = async (url: string) => {
    const res = await root_axios({
        method: "get",
        url: url
    });
    if (res.status === 200) {
        const categorys: ICategory[] = res.data;
        return categorys;
    }
    throw new HttpError("Not authorized!", 403);
};

export default function useCategorys() {
    const { data, isLoading, mutate, error } = useSWR("/data/categorys", fetcher);
    return {
        data, isLoading, mutate, error
    }
}