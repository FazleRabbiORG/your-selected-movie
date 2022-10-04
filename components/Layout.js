import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <h1>your selected movies</h1>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>Copyright by your selected movies</p>
      </footer>
    </div>
  );
}

export default Layout;
