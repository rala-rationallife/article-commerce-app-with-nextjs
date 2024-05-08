import Link from "next/link";
import styles from "@styles/header.module.css";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@lib/next-auth/options";

export async function Header() {
  const session = await getServerSession(nextAuthOptions);
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
              <Link href="/login">ログイン</Link>
            </li>
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
