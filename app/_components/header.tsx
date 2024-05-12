"use client";

import Link from "next/link";
import styles from "@styles/header.module.css";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">A-Commerce</Link>
        </div>

        <div>
          <ul className={styles.ul}>
            <li>
              <Link href="/">ホーム</Link>
            </li>
            <li>
              {user ? (
                <Link href="/profile">プロフィール</Link>
              ) : (
                <Link href="/login">ログイン</Link>
              )}
            </li>
            {user && (
              <li>
                <button
                  className={styles.logout}
                  onClick={() => signOut({ callbackUrl: "/login" })}
                >
                  ログアウト
                </button>
              </li>
            )}
            <li>
              <Link href="/">
                <Image
                  width={50}
                  height={50}
                  alt="profile_icon"
                  src={user?.image || "/default_icon.png"}
                  priority
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
