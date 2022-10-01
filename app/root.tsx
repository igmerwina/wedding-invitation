import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import styles from "./styles/app.css";
import skeletonStyles from "react-loading-skeleton/dist/skeleton.css";
import ogimage from "~/images/ogimages.jpg";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: skeletonStyles },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.comhttps://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
  ];
};

export const meta: MetaFunction = () => {
  return {
    title: "Wedding Invitation of Erwin & Iin",
    description:
      "Kamis, 13 Oktober 2022, Bali",

    "og:image": ogimage,
    "og:image:type": "image/jpeg",
    "og:site_name": "weddingerwiniin",
    "og:url": "http://www.weddingerwiniin.com/",
    "og:title": "Wedding Invitation of Erwin & Iin",
    "og:description": `Kamis, 13 Oktober 2022, Bali`,
    "og:type": "website",

    "twitter:image": ogimage,
    "twitter:card": "summary_large_image",
    "twitter:description":
      "Kamis, 13 Oktober 2022, Bali",
  };
};

export default function App() {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
