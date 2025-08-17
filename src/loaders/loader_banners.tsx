import { Skeleton } from ".";

function LoaderBanners() {
    return (
        <div className="container mx-auto px-4 py-4 sm:py-8">
            <div className="relative w-full aspect-[12/5]">
                <Skeleton className="w-full h-full" />
            </div>
        </div>
    );
}

export default LoaderBanners;