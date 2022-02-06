import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import style from "./style.module.scss";

const Home: React.FC = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("pt-br", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h11",
    })
  );

  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("pt-br", {
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h11",
        })
      );
    }, 1000);
  }, []);
  return (
    <>
      <header className={style.header}>
        <h1 className={style.logo}>Kenai</h1>
        <span className={style.time}>{time}</span>
      </header>

      <main className={style.main}>
        <h2>Bem-vindo de volta ao Kenai</h2>
        <p>Quem está usando?</p>

        <section className={style.accounts}>
          <div className={style.account}>
            <Link to="movies">
              <div className={`${style.circle} ${style["circle-1"]}`} />
            </Link>

            <h3 className={style["account-name"]}>Matheus Ramos</h3>
          </div>

          <div className={style.account}>
            <Link to="movies">
              <div className={`${style.circle} ${style["circle-2"]}`} />
            </Link>
            <h3 className={style["account-name"]}>Iuri Silva</h3>
          </div>

          <div className={style.account}>
            <Link to="movies">
              <div className={`${style.circle} ${style["circle-3"]}`} />
            </Link>
            <h3 className={style["account-name"]}>Vinicius Eiji</h3>
          </div>
        </section>
        <button
          className={style.button}
          onClick={() => {
            navigate("/create-user");
          }}
        >
          Adicionar perfil
        </button>
      </main>
    </>
  );
};

export { Home };
