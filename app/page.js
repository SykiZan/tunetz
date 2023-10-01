import Image from "next/image";
import classes from "./page.module.scss";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className={classes.main}>
      <Nav />
      <div className={classes.content}>
        <h1 className={classes.pageName}>Акции</h1>
        <div className={classes.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Footer />
      </div>
    </main>
  );
}
