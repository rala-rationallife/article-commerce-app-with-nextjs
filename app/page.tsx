import { Card } from "@components/card";
import styles from "./page.module.css";
import { getAllArticles } from "@lib/microcms/client";

export default async function Home() {
  const { contents } = await getAllArticles();

  return (
    <main className={styles.main}>
      <div className={styles.grid12}>
        <Card
          image="/javascript-programming-basics.jpg"
          title="タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル"
          price={2000}
          id="aaa"
        />
        {contents.map((content) => {
          return (
            <Card
              key={content.id}
              image={content.thumbnail.url}
              title={content.title}
              price={content.price}
              id={content.id}
            />
          );
        })}
      </div>
    </main>
  );
}
