"use client";
import Image from "next/image";
import styles from "./heroMovie.module.scss";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { useState } from "react";
const HeroMovie = () => {
  const [isActive, setIsActive] = useState(false);
  const handleSetActive = () => {
    setIsActive(!isActive); // Toggle active state on user interaction (or any other condition)
  };

  return (
    <article className={styles.container} page-content>
      <section className={styles.banner} aria-label="popular movies">
        <div className={styles.bannerSlider}>
          <div className={`${styles.sliderItem} ${styles.active}`} slider-item>
            <Image
              src={"/images/slider-banner.jpg"}
              alt="Puss in boots: the last wish"
              width={800}
              height={300}
              className={styles.imgCover}
              loading="eager"
            />
            <div className={styles.content}>
              <h2 className={styles.heading}>Puss in boots: The last Wish</h2>

              <div className={styles.metaList}>
                <div className={styles.metaItem}>2022</div>
                <div className={`${styles.metaItem} ${styles.cardBadge}`}>
                  7.5
                </div>
              </div>

              <p className={styles.genre}>Animation, Action, Adventure </p>
              <p className={styles.bannerText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore veritatis alias, fugit provident corporis itaque
                distinctio at hic molestiae consequatur.
              </p>
              <Link href={"/"}>
                <Button rounded variant="secondary">
                  Assista agora
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.sliderItem} slider-item>
            <Image
              src={"/images/slider-banner.jpg"}
              alt="Puss in boots: the last wish"
              width={800}
              height={300}
              className={styles.imgCover}
              loading="eager"
            />
            <div className={styles.content}>
              <h2 className={styles.heading}>Puss in boots: The last Wish</h2>

              <div className={styles.metaList}>
                <div className={styles.metaItem}>2022</div>
                <div className={`${styles.metaItem} ${styles.cardBadge}`}>
                  7.5
                </div>
              </div>

              <p className={styles.genre}>Animation, Action, Adventure </p>
              <p className={styles.bannerText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore veritatis alias, fugit provident corporis itaque
                distinctio at hic molestiae consequatur.
              </p>
              <Link href={"/"}>
                <Button rounded variant="secondary">
                  Assista agora
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.sliderItem} slider-item>
            <Image
              src={"/images/slider-banner.jpg"}
              alt="Puss in boots: the last wish"
              width={800}
              height={300}
              className={styles.imgCover}
              loading="eager"
            />
            <div className={styles.content}>
              <h2 className={styles.heading}>Puss in boots: The last Wish</h2>

              <div className={styles.metaList}>
                <div className={styles.metaItem}>2022</div>
                <div className={`${styles.metaItem} ${styles.cardBadge}`}>
                  7.5
                </div>
              </div>

              <p className={styles.genre}>Animation, Action, Adventure </p>
              <p className={styles.bannerText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore veritatis alias, fugit provident corporis itaque
                distinctio at hic molestiae consequatur.
              </p>
              <Link href={"/"}>
                <Button rounded variant="secondary">
                  Assista agora
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.sliderItem} slider-item>
            <Image
              src={"/images/slider-banner.jpg"}
              alt="Puss in boots: the last wish"
              width={800}
              height={300}
              className={styles.imgCover}
              loading="eager"
            />
            <div className={styles.content}>
              <h2 className={styles.heading}>Puss in boots: The last Wish</h2>

              <div className={styles.metaList}>
                <div className={styles.metaItem}>2022</div>
                <div className={`${styles.metaItem} ${styles.cardBadge}`}>
                  7.5
                </div>
              </div>

              <p className={styles.genre}>Animation, Action, Adventure </p>
              <p className={styles.bannerText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore veritatis alias, fugit provident corporis itaque
                distinctio at hic molestiae consequatur.
              </p>
              <Link href={"/"}>
                <Button rounded variant="secondary">
                  Assista agora
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.sliderControl}>
          <div className={styles.controlInner}>
            <button
              className={`${styles.posterBox} ${styles.sliderItem} ${styles.active}`}
            >
              <Image
                src={"/images/slider-control.jpg"}
                alt="Slide to puss in boots"
                width={300}
                height={300}
                loading="lazy"
                draggable="false"
                className={styles.imgCover}
              />
            </button>
            <button
              className={`${styles.posterBox} ${styles.sliderItem} ${styles.active}`}
            >
              <Image
                src={"/images/slider-control.jpg"}
                alt="Slide to puss in boots"
                width={300}
                height={300}
                loading="lazy"
                draggable="false"
                className={styles.imgCover}
              />
            </button>
            <button
              className={`${styles.posterBox} ${styles.sliderItem} ${styles.active}`}
            >
              <Image
                src={"/images/slider-control.jpg"}
                alt="Slide to puss in boots"
                width={300}
                height={300}
                loading="lazy"
                draggable="false"
                className={styles.imgCover}
              />
            </button>
            <button
              className={`${styles.posterBox} ${styles.sliderItem} ${styles.active}`}
            >
              <Image
                src={"/images/slider-control.jpg"}
                alt="Slide to puss in boots"
                width={300}
                height={300}
                loading="lazy"
                draggable="false"
                className={styles.imgCover}
              />
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default HeroMovie;
