"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./login.module.css";
import { getProviders, signIn } from "next-auth/react";

export default async function Login() {
  const providers = await getProviders();

  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>ログイン</h2>
      {providers &&
        Object.values(providers).map((provider) => {
          return (
            <button
              key={provider.id}
              className={styles.github}
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHubでログイン</span>
            </button>
          );
        })}
    </main>
  );
}
