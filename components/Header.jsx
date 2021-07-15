import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Layout.module.css";

const name = "bluuweb!";

export default function Header({ home }) {
  return (
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            priority
            src="/imagenes/perfil.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          ></Image>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/imagenes/perfil.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              ></Image>
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
      <nav>
        <Link href="/">
          <a>Inicio | </a>
        </Link>
        <Link href="/blog">
          <a>Blog | </a>
        </Link>
        <Link href="/contacto">
          <a>Contacto</a>
        </Link>
      </nav>
    </header>
  );
}
