import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "Ganamos365",
    template: "%s | Ganamos365",
  },
  description:
    "Sumate a Ganamos365, el casino online con bonos exclusivos, retiros 24hs y miles de jugadores activos. ¡Obtené tu bono YA!",
  keywords: [
    "casino online",
    "casino virtual",
    "casino online Argentina",
    "casino online con Mercado Pago",
    "casino online con retiros 24hs",
    "casino online con bonos",
    "casino online con bonos de bienvenida",
    "Ganamos365",
    "bono de bienvenida",
    "casino con Mercado Pago",
    "retirar dinero 24hs",
    "casino Argentina",
    "juegos de azar",
    "casino confiable",
  ],
  openGraph: {
    title: "Ganamos365 - Casino Online con Bonos y Retiros 24hs",
    description:
      "Sumate a Ganamos365, el casino online con bonos exclusivos, retiros 24hs y miles de jugadores activos.",
    url: "https://ganamos365landing.vercel.app",
    siteName: "Ganamos365",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "Logo de Ganamos365",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganamos365 - Casino Online",
    description:
      "Bonos de bienvenida, retiros rápidos, +10.000 jugadores activos. ¡Probá tu suerte en Ganamos365!",
    images: ["/logo.webp"],
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  metadataBase: new URL("https://ganamos365landing.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <meta name="facebook-domain-verification" content="i2ip4nczwdg93cqmt3i8dieicd9gsm" />
        <script>
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '629254799619654');
fbq('track', 'PageView');`}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=629254799619654&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`antialiased ${poppins.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}