import { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout:React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
    <Head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="author" content="Aleliya Turushkina" />
      {description && <meta name="description" content={description} />}
      <title>{title ? `${title} | Aleliya portfolio web site` : 'Aleliya portfolio web site'}</title>
    </Head>
    <div style={body}>
      <header style={links}>

        <Link href="/">Main</Link>

        <Link style={linkabout} href="/about-me">About me</Link>
        <Link style={linkabout} href='/photo'>Photo</Link>
        <Link style={linkabout} href='/comic'>Comic</Link>
      </header>
      <main>{children}</main>
      <footer style={foot}>
        <p>How you can contact me?</p>
        <div style={listinfooter}>
          <Link style={linkabout} href="https://github.com/Aleliya">Github</Link>
          <Link style={linkabout} href="//t.me/aleliya_turushkina">Telegram</Link>
          <Link style={linkabout} href="mailto:aleliya2005@gmail.com">Email</Link>
        </div>
      </footer>
    </div>
    </>
  );
};
const body:React.CSSProperties = {
  backgroundColor: 'white'
};
const links:React.CSSProperties = {
  fontFamily: 'DejaVu Sans Mono, monospace',
  fontSize: '30px',
  marginLeft: '380px',
};
const linkabout:React.CSSProperties = {
  paddingLeft: '150px',
};
const foot:React.CSSProperties = {
  paddingTop: '550px',
  paddingLeft: '300px',
  fontFamily: 'DejaVu Sans Mono, monospace',
  fontSize: '20px',
};
const listinfooter:React.CSSProperties = {
  paddingLeft: '60px',
};
export default Layout;