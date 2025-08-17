import { root_axios } from "@/server/api/config";
import { IProduct } from "@/server/db/models/products";
import useSWRImmutable from "swr/immutable";


const fetcher = async (url: string) => {
    const res = await root_axios({
        method: "get",
        url: url
    });
    if (res.data.Product) {
        const product: IProduct = res.data;
        return product;
    }
    const error: any = new Error("Not authorized!");
    error.status = 403;
    throw error;
};

export default function useProductDetail(link: string) {
    const { data, error, isLoading, mutate } = useSWRImmutable(link ? `/data/product/${link}` : null, fetcher);
    return {
        Data: data,
        ErrorData: error,
        MutateData: mutate,
        LoadingData: isLoading
    };
}
