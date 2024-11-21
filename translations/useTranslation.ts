import { Translation } from "./types";
import { useRouter } from "nextra/hooks";

export function useTranslation<T>(translation: Translation<T>): T {
    const { locale, defaultLocale } = useRouter();
    return translation[locale || defaultLocale || "en"];
}