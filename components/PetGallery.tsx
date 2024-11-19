import styles from "./PetGallery.module.css";
import Image from "next/image";

type Pet = {
  name: string;
  src: string;
  owner: string;
};

const pets: Pet[] = [
  {
    name: "Harley",
    src: "/assets/pets/harley.jpg",
    owner: "S1neWav_",
  },
  {
    name: "Cosmo",
    src: "/assets/pets/cosmo.jpg",
    owner: "S1neWav_",
  },
  {
    name: "Spumoni",
    src: "/assets/pets/spumoni.jpg",
    owner: "Gen",
  },
  {
    name: "Io",
    src: "/assets/pets/io.jpg",
    owner: "Gen",
  },
  {
    name: "Artemis",
    src: "/assets/pets/artemis.jpg",
    owner: "Gen",
  },
  {
    name: "Finn",
    src: "/assets/pets/finn.jpg",
    owner: "Gen",
  },
  {
    name: "Eva",
    src: "/assets/pets/eva.jpg",
    owner: "Luna",
  },
  {
    name: "Fufréda",
    src: "/assets/pets/fufreda.jpg",
    owner: "Jouda",
  },
  {
    name: "Sir Harold III",
    src: "/assets/pets/sir_harold_iii.jpg",
    owner: "YeetPizza74",
  },
];

export default function PetGallery() {
  return (
    <div className={styles.petGrid}>
      {pets.map((pet) => (
        <div
          key={pet.src}
          className="_group _flex _flex-col _justify-start _overflow-hidden _rounded-lg _border _border-gray-200 _text-current _no-underline dark:_shadow-none hover:_shadow-gray-100 dark:hover:_shadow-none _shadow-gray-100 active:_shadow-sm active:_shadow-gray-200 _transition-all _duration-200 hover:_border-gray-300 _bg-gray-100 _shadow dark:_border-neutral-700 dark:_bg-neutral-800 dark:_text-gray-50 hover:_shadow-lg dark:hover:_border-neutral-500 dark:hover:_bg-neutral-700"
        >
          <Image
            src={pet.src}
            alt={pet.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              aspectRatio: 1,
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className="_flex _justify-between _p-4">
            <span className="_font-semibold _gap-2 _text-gray-700 hover:_text-gray-900 dark:_text-gray-300 dark:hover:_text-gray-100">
              {pet.name}
            </span>
            <span className="_text-gray-500 dark:_text-gray-400">
              {pet.owner}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
