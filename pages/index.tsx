
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Navbar />
      </div>
    </main>
  );
};

export default Home;
