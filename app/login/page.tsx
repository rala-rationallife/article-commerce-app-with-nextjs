import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./login.module.css";

export default function Login() {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>ログイン</h2>
      <button className={styles.github}>
        <FontAwesomeIcon icon={faGithub} />
        <span>GitHubでログイン</span>
      </button>
    </main>
  );
}
