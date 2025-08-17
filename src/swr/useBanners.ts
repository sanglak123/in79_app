import { root_axios } from "@/server/api/config";
import { IImage } from "@/server/db/models/images";
import useSWR from "swr";
import HttpError from ".";


const fetcher = async (url: string) => {
    const res = await root_axios({
        method: "get",
        url: url
    });
    if (res.status === 200) {
        const banners: IImage[] = res.data;
        return banners;
    }
    throw new HttpError("Not authorized!", 403);
};

export default function useBanners() {
    const { data, isLoading, mutate, error } = useSWR("/data/banners", fetcher);
    return {
        data, isLoading, mutate, error
    }
}