import LoaderBanners from "@/loaders/loader_banners";
import useBanners from "@/swr/useBanners";

import dynamic from "next/dynamic";

const DynamicBanners = dynamic(() => import("@/components/dynamicComponents/dynamic_banners"), {
    ssr: false,
    loading: () => <p>Loading slider...</p>,
});

export default function HomeBanners() {
    const Banners = useBanners();
    if (Banners.error) return <div>Failed to load</div>;
    if (Banners.isLoading) return <LoaderBanners />;
    if (!Banners.data?.length) return null;
    return <DynamicBanners banners={Banners.data} />;
}