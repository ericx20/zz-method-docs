export type Language = "en" | "fr" | "he" | "zh"

export type Translation<T> = { [key in Language]: T }
