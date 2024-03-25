/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import { useEffect, useState } from "react";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Badges from "../../utils/badge.list.util";
import Icon from "../../utils/icon.util";

import css from "../../../styles/sections/projects/featured.module.scss";
import content from "../../../content/projects/featured.json";

export default function FeaturedProject({ content }, index) {
  const {
    project,
    url,
    repo,
    descriptionTitle,
    description,
    stack,
    imageOptions,
    images,
  } = content;
  const [theme, setTheme] = useState(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme);
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <m.section
      key={index}
      className={css.project}
      //framer-motion
      ref={ref}
      variants={container}
      initial={["rest", "hidden"]}
      whileHover="hover"
      animate={controls}
    >
      <div className={css.details}>
        <div className={css.projectHeader}>
          <div className={css.header}>
            <h3 className="highlight">{project}</h3>
            <a href={url} target="_blank">
              <span className={css.privateOr}>
                <i className="devicon-android-plain"></i>
                {repo}
              </span>
            </a>
          </div>
          <div className={css.description}>
            {/* <p>
              <strong>{descriptionTitle}</strong>
            </p> */}
            <div
              className="project-desc"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
          <div className={css.stackContainer}>
            <Badges
              list={stack}
              block="stack"
              fullContainer={false}
              color={false}
            />
          </div>
          {/* <m.div variants={""} className={css.viewProject}>
            <Icon icon={["fad", "arrow-right-to-bracket"]} />
          </m.div> */}
        </div>
      </div>

      <div className={css.imageContainer}>
        <span className={`${css.imageAnimationContainer}`}>
          {images.map(({ key, url, hover, svg, durl, lurl }, index) => {
            hover = hover === "left" ? hoverLeft : hoverRight;
            return (
              <m.div key={`${index}-${key}`} variants={item}>
                <m.div variants={hover}>
                  <img
                    src={url ? url : theme === "dark" ? durl : lurl}
                    alt="x"
                  />
                </m.div>
              </m.div>
            );
          })}
        </span>
      </div>
    </m.section>
  );
}

const container = {
  hidden: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.0625,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.25,
    },
  },
  rest: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0,
    },
  },
  hover: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0,
    },
  },
};

const item = {
  hidden: {
    y: 75,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.35,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const hoverLeft = {
  rest: {
    x: 0,
  },
  hover: {
    x: -20,
  },
};

const hoverRight = {
  rest: {
    x: 0,
  },
  hover: {
    x: 20,
  },
};
