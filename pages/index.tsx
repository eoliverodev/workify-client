import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import AppBar from "../components/appbar";
import HeadTag from '../components/html/head';
// import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <HeadTag title="Home" />

      <AppBar />

      <h1>Homepage</h1>

    </div>
  );
};

export default Home;
