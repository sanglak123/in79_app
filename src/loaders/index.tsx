import React from "react";

// Cho phép đổi thẻ để tránh <div> nằm trong <p>
type Tag = "div" | "span";

export const Skeleton = ({
    as = "div",
    className = "",
}: { as?: Tag; className?: string }) => {
    const TagName = as as any;
    return (
        <TagName
            aria-hidden="true"
            className={[
                "relative overflow-hidden rounded-md",
                "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200",
                "dark:from-gray-700 dark:via-gray-600 dark:to-gray-700",
                "bg-[length:200%_100%] bg-[position:0%_0%] animate-shimmer",
                // nếu là span thì hiển thị inline để hợp lệ trong <p>
                as === "span" ? "inline-block align-middle" : "",
                className,
            ].join(" ")}
        />
    );
};

export const Line = ({ className = "" }: { className?: string }) => (
    <Skeleton as="span" className={"h-3 w-full " + className} />
);

export const Label = ({ className = "" }: { className?: string }) => (
    <Skeleton as="span" className={"h-3 w-24 " + className} />
);

/* -------------------- Inputs -------------------- */
export const InputSkeleton = ({ className = "" }: { className?: string }) => (
    <div className={"space-y-2 " + className}>
        <Label />
        <Skeleton className="h-10 w-full" />
    </div>
);

export const TextAreaSkeleton = ({
    rows = 3,
    className = "",
}: { rows?: number; className?: string }) => (
    <div className={"space-y-2 " + className}>
        <Label />
        <Skeleton className={`w-full ${rows >= 3 ? "h-24" : "h-16"}`} />
    </div>
);

/* -------------------- Buttons -------------------- */
export const ButtonSkeleton = ({ className = "" }: { className?: string }) => (
    <Skeleton className={"h-10 w-28 " + className} />
);

/* -------------------- Avatar / Logo -------------------- */
export const LogoSkeleton = () => (
    <div className="flex h-full w-full items-center justify-center p-8">
        <div className="aspect-square w-40 overflow-hidden rounded-xl">
            <Skeleton className="h-full w-full" />
        </div>
    </div>
);

/* -------------------- Section Headers -------------------- */
export const SectionHeaderSkeleton = ({
    titleWidth = "w-40",
}: { titleWidth?: string }) => (
    <div className="px-4 py-5 sm:px-6">
        <Skeleton className={`h-5 ${titleWidth}`} />
    </div>
);
