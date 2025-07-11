import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
    
       <p>
           Powered by <a href="https://api.nasa.gov/" target="_blank"  >NASA Open APIs</a>
        </p>
        <p>© NASA Explorer · All Rights Reserved</p>
     
    </footer>
  );
}