import React from "react";
import style from "./style.module.scss";
import { AiFillStar } from "react-icons/ai";
import spiderMan from "../../assets/images/spider-man.png";
import theWitcher from "../../assets/images/the-witcher.png";
import shangChi from "../../assets/images/shang-chi.png";
import loki from "../../assets/images/loki.png";
import wisaDragon from "../../assets/images/wisa-dragon.png";

const CategoryMovies: React.FC = () => {
  return (
    <>
      <h1 className={style["name-category"]}>Populares</h1>

      <div className={style.grid}>
      <div
          className={style.card}
          style={{ background: `url(${shangChi})  no-repeat ` }}
        >
          <div className={style.cardInfo}>
            <span className={style.category}>Categoria</span>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2 className={style['filme-name']}>Shang-Chi</h2>
          </div>
        </div>
      <div
          className={style.card}
          style={{ background: `url(${wisaDragon})  no-repeat ` }}
        >
          <div className={style.cardInfo}>
            <span className={style.category}>Categoria</span>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2 className={style['filme-name']}>Wisa Dragon</h2>
          </div>
        </div>
      <div
          className={style.card}
          style={{ background: `url(${loki})  no-repeat ` }}
        >
          <div className={style.cardInfo}>
            <span className={style.category}>Categoria</span>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2 className={style['filme-name']}>Loki</h2>
          </div>
        </div>
        <div
          className={style.card}
          style={{ background: `url(${spiderMan})  no-repeat ` }}
        >
          <div className={style.cardInfo}>
            <span className={style.category}>Categoria</span>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2 className={style['filme-name']}>Spider-Man</h2>
          </div>
        </div>
        <div
          className={style.card}
          style={{ background: `url(${theWitcher})` }}
        >
          <div className={style.cardInfo}>
            <span className={style.category}>Categoria</span>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2 className={style['filme-name']}>The Witcher</h2>
          </div>
        </div>
      
    
      </div>
    </>
  );
};

export default CategoryMovies;
