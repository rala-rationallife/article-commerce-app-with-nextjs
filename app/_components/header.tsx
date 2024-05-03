import Link from "next/link";
import styles from "@styles/header.module.css";
import Image from "next/image";

export function Header() {
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
              <Link href="/">ログイン</Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  width={50}
                  height={50}
                  alt="profile_icon"
                  src={"/default_icon.png"}
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
