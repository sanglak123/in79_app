import useSWR from "swr";
import { root_axios } from "../api/config"
import { IImage } from "../db/models/images";

const fetcher = async (url: string) => {
    const res = await root_axios({
        method: "get",
        url: url
    });
    if (res.status === 200) {
        const banners: IImage[] = res.data;
        return banners;
    }
    const error: any = new Error("Not authorized!");
    error.status = 403;
    throw error;
};

export default function useBanners() {
    const { data, isLoading, mutate, error } = useSWR("/data/banners", fetcher);
    return {
        data, isLoading, mutate, error
    }
}