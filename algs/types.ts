export interface AlgSet {
  name: string;
  stickering: "ZBLL" | "OCLL" | "PLL";
  visualization: "2D" | "3D";
  algCases: AlgCase[];
  hasCategories?: boolean;
}

type NonEmptyArray<T> = [T, ...T[]];

export interface AlgCase {
  name: string;
  algs: NonEmptyArray<string>;
  category?: string;
}
