"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@styles/card.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  image: string;
  title: string;
  price: number;
  id: string;
}

export function Card({ image, title, price, id }: Props) {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const startCheckout = async (articleId: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          articleId,
          title,
          price,
        }),
      });

      const resData = await res.json();

      if (resData) {
        router.push(resData.checkout_url);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className={styles.card}>
      <Image
        priority
        src={image}
        alt=""
        width={1280}
        height={640}
        className={styles.photo}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>{`￥ ${price}`}</p>
      {user && (
        <button className={styles.button} onClick={() => startCheckout(id)}>
          購入する
        </button>
      )}
    </div>
  );
}
