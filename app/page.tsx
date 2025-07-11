import Link from "next/link";
import styles from "./index.module.scss";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1>👋 Welcome!</h1>
        <p>Please choose where you want to go:</p>
        <div className={styles.buttons}>
          <Link href="/auth" className={styles.linkButton}>
            Go to Login
          </Link>
          <Link href="/dashboard" className={styles.linkButton}>
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
