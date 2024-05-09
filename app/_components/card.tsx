import Image from "next/image";
import Link from "next/link";
import styles from "@styles/card.module.css";

interface Props {
  url: string;
  image: string;
  title: string;
  price: number;
}

export function Card({ url, image, title, price }: Props) {
  return (
    <Link href={url} className={styles.card}>
      <Image
        priority
        src={image}
        alt=""
        width={1280}
        height={640}
        className={styles.photo}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>{`${price} 円`}</p>
    </Link>
  );
}
