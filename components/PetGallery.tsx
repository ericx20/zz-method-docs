import styles from "./PetGallery.module.css";
import Image from "next/image";

type Pet = {
  name: string;
  src: string;
};

const pets: Pet[] = [
  {
    name: "Harley",
    src: "/assets/pets/harley.jpg",
  },
  {
    name: "Cosmo",
    src: "/assets/pets/cosmo.jpg",
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
            }}
          />
          <span className="nx-flex nx-font-semibold nx-items-start nx-gap-2 nx-p-4 nx-text-gray-700 hover:nx-text-gray-900 dark:nx-text-gray-300 dark:hover:nx-text-gray-100 nx-justify-center">
            {pet.name}
          </span>
        </div>
      ))}
    </div>
  );
}
