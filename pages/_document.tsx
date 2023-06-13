import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const setThemeMode = `
        if(localStorage.theme === "dark"){
          document.documentElement.className = "dark";
        }else{
          localStorage.theme = "light";
        }
      `;

  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="hW6cK1FvEMGBpQikcfiFQZEnL8hMG-GibEQZC9hjl38" />
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
