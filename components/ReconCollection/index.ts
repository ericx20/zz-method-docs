import dynamic from "next/dynamic";

export const ReconCollection = dynamic(() => import("./ReconCollection"), {
  ssr: false,
});
