export type Language = "en" | "fr" | "zh"

export type Translation<T> = { [key in Language]: T }
