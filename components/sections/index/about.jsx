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
          subTitle="I'm a seasoned Android developer with a zest for embracing life's adventures in all their glory. Beyond the world of coding, I'm a firm believer in exploring new horizons, diving headfirst into thrilling escapades, and reveling in the awe-inspiring wonders of the great outdoors. Fueling my passion for both innovation and vitality, you'll often find me pushing my limits at the gym, sculpting not just my body, but my mind as well. Whether I'm unwinding with cherished friends or immersing myself in the intricacies of a new coding challenge, I approach each moment with boundless enthusiasm and an insatiable hunger for discovery, making every experience an unforgettable journey."
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
              icon={["fab", "circle"]}
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
              invertedColor="invertedColor"
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
  { key: "cubes", name: "Product Strategy", type: "far" },
];
