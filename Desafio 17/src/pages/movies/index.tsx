import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

import star from "../../assets/images/star.svg";
import { BsSearch, BsBell } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import CategoryMovies from "../../components/CategoryMovies";

const Movies: React.FC = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1 className={style.logo}>Kenai</h1>

        <nav className={style.navigation}>
          <Link to={"/movies"} className={style.link}>
            <BsSearch size={24} color="#fff" className={style["link-icon"]} />
          </Link>
          <Link to={"/movies"} className={style.link}>
            Inicio
          </Link>
          <Link to={"/movies"} className={style.link}>
            Minha lista
          </Link>
          <Link to={"/movies"} className={style.link}>
            <BsBell size={24} color="#fff" className={style["link-icon"]} />
          </Link>
          <Link to={"/"} className={style.link}>
            <FiUser size={24} color="#fff" className={style["link-icon"]} />
          </Link>
        </nav>
        <GiHamburgerMenu
          className={style.hamburger}
          color="#f9f9f9"
          size="2rem"
        />
      </header>
      <main className={style.main}>
        <div className={style["movie-infos"]}>
          <span className={style.category}>Ação</span>
          <div>
            <div className={style.stars}>
              <img src={star} alt="start" />
              <img src={star} alt="start" />
              <img src={star} alt="start" />
              <img src={star} alt="start" />
              <img src={star} alt="start" />
            </div>
            <IoMdTime size="19px" color="#f9f9f9" />
            <span className={style.time}>1h 57m</span>
          </div>
        </div>

        <h2 className={style["movie-name"]}>Batman</h2>
        <p className={style["description-movie"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum
          convallis turpis, nec rutrum quam vulputate viverra. Proin ornare
          dolor sit amet laoreet dignissim.
        </p>
        <button className={style.button}>Assistir Agora</button>
      </main>
      <section className={style["container-section"]}>
        <CategoryMovies />
      </section>
      <footer className={style.footer}>
        <h1 className={style.logo}>Kenai</h1>

        <nav>
          <a href="/movies">
            <FiInstagram size="30px" color="#f9f9f9" />
          </a>
          <a href="/movies">
            <FiTwitter size="30px" color="#f9f9f9" />
          </a>
          <a href="/movies">
            <FiFacebook size="30px" color="#f9f9f9" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export { Movies };
