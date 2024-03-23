import Section from "../../structure/section";
import Container from "../../structure/container";

import space from "../../utils/spacing.util";
import timeline from "../../../styles/sections/companies/timeline.module.scss";
import CodeTheoryLogo from "/public/img/code_and_theory_logo.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CodeAndTheory from "./codeAndTheory";
import Yml from "./yml";
import BornDigital from "./bornDigital";
import SektchDigital from "./sketchDigital";
import Tatva from "./tatva";

export default function Timeline() {
  return (
    <Section classProp={`${timeline.section}`}>
      <Container spacing={"VerticalXXXL"}>
        <section>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="Oct 2023 - Present"
              iconStyle={{ background: "#fff", color: "#fff" }}
              icon={<CodeAndTheory />}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bengaluru, Karnataka, India (Remote)
              </h4>
              <p>
                Engaging directly with clients, I collaborate closely to grasp
                their requirements and develop an application designed for
                lasting impact. The goal is to create a solution that not only
                simplifies users lives but also contributes to long-term revenue
                growth for the client.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jul 2021- Sep 2023"
              iconStyle={{ background: "#fff", color: "#fff" }}
              icon={<Yml />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bangalore Urban, Karnataka, India (Remote)
              </h4>
              <p>
                Ensuring the creation of high-quality products that leaves a
                lasting impact.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jun 2020 - Jun 2021"
              iconStyle={{ background: "#fff", color: "#fff" }}
              icon={<BornDigital />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bengaluru, Karnataka, India (Remote)
              </h4>
              <p>
                I leveraged my UI/UX expertise to craft seamless experiences,
                offering insightful enhancements. Working alongside Amazon
                Amplify, I contributed to feature development, enriching
                application functionality and user engagement. Additionally, I
                played a pivotal role in implementing OMEMO Encryption,
                guaranteeing robust security measures for communication and data
                safeguarding.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Dec 2019 - May 2020"
              iconStyle={{ background: "#fff", color: "#fff" }}
              icon={<SektchDigital />}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bengaluru, Karnataka, India
              </h4>
              <p>
                I spearheaded comprehensive research and development initiatives
                focused on integrating chatbots and platforms like Kommunicate
                seamlessly into applications. Additionally, I offered mentorship
                to newly onboarded team members, aiding them in navigating their
                daily tasks and overcoming obstacles. Moreover, I maintained
                client relationships, prioritizing clear communication and
                regular updates on the advancement of developed features and
                products.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Jun 2018 - Nov 2019"
              iconStyle={{ background: "#fff", color: "#fff" }}
              icon={<Tatva />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <p>
                I have gained experience in developing a diverse range of
                applications, including Flight booking, Shopping, Messaging,
                Online-Quiz, Sports, and Restaurant applications.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
      </Container>
    </Section>
  );
}
