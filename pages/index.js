import Head from "next/head";
import Container from "../components/Global/Container";
import News from "../components/News/News";
import Google from "../components/Google/Google";
import Bookmarks from "../components/Bookmarks/Bookmarks";
import Clock from "../components/Clock/Clock";
import Weather from "../components/Weather/Weather";
import Calendar from "../components/Calendar/Calendar";
import styles from "../styles/Home.module.css";
import Crypto from "../components/Crypto/Crypto";
{
  /* <div className={styles.container}></div> */
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zwei</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,500;1,400&display=swap"
          rel="stylesheet"
        />
        <meta charset="UTF-8" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
          rel="stylesheet"
          integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
      </Head>

      <div className=" xl:flex xl:justify-center overflow-scroll  xl:items-center min-h-screen  bg-hero-circuit-board">
      <div
      className=" grid
    grid-cols-3 grid-flow-row gap-6 "
    >          <Crypto />
          <div className="col-span-2 xl:col-span-2 row-span-2">
            <Google />
            <Bookmarks />
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 md:col-span-2 row-span 2">
                <Clock />
                <Weather />
              </div>
              <div className="col-span-3 lg:col-span-1">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
