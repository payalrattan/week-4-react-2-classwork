import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/astronomy" className={styles.link}>Astronomy Picture of the Day</Link>
      <Link href="/roverPhotos" className={styles.link}>Rover Photos</Link>
    </nav>
  );
};
