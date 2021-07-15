import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";

export default function contacto() {
  return (
    <Layout
      title="Página de contacto"
      description="descripcion de página de contacto"
    >
      <h1>Contacto</h1>

      <Image
        src="/imagenes/perfil.jpg"
        height={400}
        width={400}
        alt="mi imagen de perfil"
      ></Image>

      <button>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </button>
    </Layout>
  );
}
