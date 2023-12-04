export interface AlgSet {
  name: string;
  stickering?: string; // this should be supported by cubing.js `experimental-stickering` attribute
  customStickering?: string; // this is for cubing.js `experimental-stickering-mask-orbits`
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
