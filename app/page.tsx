import { Card } from "@components/card";
import styles from "./page.module.css";
import { getAllArticles } from "@lib/microcms/client";

export default async function Home() {
  const { contents } = await getAllArticles();

  return (
    <main className={styles.main}>
      <div className={styles.grid12}>
        <Card
          url="/"
          image="/javascript-programming-basics.jpg"
          title="タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル"
          price={2000}
        />
        {contents.map((content) => {
          return (
            <Card
              key={content.id}
              url="/"
              image={content.thumbnail.url}
              title={content.title}
              price={content.price}
            />
          );
        })}
      </div>
    </main>
  );
}
