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
];

export default function PetGallery() {
  return (
    <div className={styles.petGrid}>
      {pets.map((pet) => (
        <div
          key={pet.src}
          className="nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200 nx-text-current nx-no-underline dark:nx-shadow-none hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100 active:nx-shadow-sm active:nx-shadow-gray-200 nx-transition-all nx-duration-200 hover:nx-border-gray-300 nx-bg-gray-100 nx-shadow dark:nx-border-neutral-700 dark:nx-bg-neutral-800 dark:nx-text-gray-50 hover:nx-shadow-lg dark:hover:nx-border-neutral-500 dark:hover:nx-bg-neutral-700"
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
          <div className="nx-flex nx-justify-between nx-p-4">
            <span className="nx-font-semibold nx-gap-2 nx-text-gray-700 hover:nx-text-gray-900 dark:nx-text-gray-300 dark:hover:nx-text-gray-100">
              {pet.name}
            </span>
            <span className="nx-text-gray-500 dark:nx-text-gray-400">
              {pet.owner}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
