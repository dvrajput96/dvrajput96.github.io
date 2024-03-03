/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// Core packages
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section} idProp="about">
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="Experienced Android developer with a proven track record of delivering high-quality applications. Proficient in Java and Kotlin programming languages, specializing in MVI, MVVM, and Modularization. Adept at utilizing a variety of Android technologies for seamless development."
        />
        <section className={about.content}>
          <div className={about.image}>
            <Swiper
              autoplay
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <img src="/img/dvr.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/dvr-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/dvr-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/dvr-4.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Softskills that pay the bills"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="In addition to my technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a Android Developer. Outside of work, I am passionate about maintaining an active lifestyle, engaging in activities like gym workouts, and exploring new destinations through travel. I am confident in my ability to bring passion and value to any project."
            />
            <BadgesBlock
              title="Reasearch and planning"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="One of my most gratifying aspects of the creative process lies in meticulously planning the architecture of a project. Whether delving into Design Systems or shaping Brand Strategy, I take pleasure in intricately managing the various touch points of user experience, ensuring a harmonious and well-structured development journey."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "User Research", type: "fad" },
  { key: "qrcode", name: "Digital Strategy", type: "fad" },
  { key: "window", name: "Design Systems", type: "fad" },
  { key: "cubes", name: "Product Strategy", type: "far" },
  { key: "layer-plus", name: "Brand Strategy", type: "fad" },
  { key: "solar-system", name: "Operations", type: "fad" },
];
