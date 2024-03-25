// Core packages
import Image from "next/image";

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
import about from "../../../styles/sections/index/technical.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="As an app developer, I specialize in crafting intuitive digital experiences by leveraging a diverse set of tools and languages. My expertise lies in seamlessly translating creative concepts into functional and user-friendly applications, ensuring a dynamic and engaging user experience."
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <CopyBlock
              title="Polymath foundations"
              icon={["fat", "chart-network"]}
              copy="My proficiency in languages such as Java, Kotlin, and a range of frameworks, including Android Jetpack and Jetpack Compose, empowers me to navigate the intricacies of app development seamlessly. "
              iconClass={about.icon}
              containerClass={about.container}
            />
            <BadgesBlock
              title="Software I love to work with"
              copy="With over 5 years of experience in creating digital assets, I possess a profound and intuitive understanding of designing interfaces, drawing inspiration from the best software products worldwide. Throughout my journey, I have adeptly navigated and utilized a diverse range of software tools, enriching my expertise as an Android developer and enabling me to contribute to the creation of exceptional and user-centric applications."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Technologies I love to build with"
              copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

const software = [
  { key: "android", name: "Android", type: "devicon" },
  // { key: "androidstudio", name: "Android Studio", type: "devicon" },
  // { key: "java", name: "Java", type: "devicon" },
  { key: "kotlin", name: "Kotlin", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "mailbox", name: "Postman", type: "fas" },
  // { key: "computer-mouse", name: "Click Up", type: "fas" },
];

const tech = [
  { key: "android", name: "Android", type: "devicon" },
  // { key: "androidstudio", name: "Android Studio", type: "devicon" },
  // { key: "java", name: "Java", type: "devicon" },
  { key: "kotlin", name: "Kotlin", type: "devicon" },
  { key: "jetpackcompose", name: "Jetpack Compose", type: "devicon" },
  { key: "google", name: "GA4/GTM", type: "devicon" },
  // { key: "html5", name: "HTML5", type: "devicon" },
  // { key: "css3", name: "CSS3", type: "devicon" },
  // { key: "sass", name: "SASS", type: "devicon" },
  { key: "jira", name: "Jira", type: "devicon" },
  { key: "confluence", name: "Confluence", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "graphql", name: "GraphQL", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "heap", name: "Heap" },
  { key: "hilt", name: "Hilt" },
  { key: "dagger", name: "Dagger" },
  {
    key: "dependency-injection",
    name: "Dependency Injection",
  },
  {
    key: "content-stack",
    name: "content stack ",
  },
  {
    key: "retrofit",
    name: "Retrofit",
  },
  {
    key: "brightcove",
    name: "Brightcove",
  },
  {
    key: "chatgpt",
    name: "ChatGPT 3.5",
  },
  {
    key: "co-pilot",
    name: "Github Co-Pilot",
  },
];
