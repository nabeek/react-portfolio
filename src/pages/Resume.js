import React from "react";
import "./Resume.css";
import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <div className="hero-body">
      <div className="container">
        <h1 className="title has-text-centered" id="resume-name">
          Nicholas Beekhuizen
        </h1>
        <h3 className="subtitle has-text-centered" id="resume-section">
          Experience
        </h3>

        <section className="job-entry" id="bridge-job">
          <h4 className="title resume-job">Bridge Investment Group</h4>
          <h4 className="subtitle resume-position">
            IT Project Manager
            <span style={{ float: "right" }}>June 2019 - present</span>
          </h4>
          <ul>
            <li>
              Complete strategic analysis and remediation of IT infrastructure
              projects across multiple verticals with $20B in assets under
              management
            </li>
            <li>
              Serve as liaison for all IT and technology-services vendors or
              providers for 160+ properties and five corporate offices
              throughout the U.S.
            </li>
            <li>
              Revamped Agile intake processes, eliminating 25% of wasted
              development hours and shortening deployment timelines to ensure
              critical product delivery dates were met
            </li>
          </ul>
        </section>

        <section className="job-entry" id="ablevets-job">
          <h4 className="title resume-job">AbleVets</h4>
          <h4 className="subtitle resume-position">
            Cyber Threat Intelligence Anlayst
            <span style={{ float: "right" }}>Sep 2018 - June 2019</span>
          </h4>
          <ul>
            <li>
              Authored and disseminated serialized reporting and weekly
              situation briefings to thousands of Department of Veterans Affairs
              personnel
            </li>
            <li>
              Performed analytic support focused on cyber doctrine and policies,
              and threat actor capabilities and intent
            </li>
            <li>
              Provided targeted attack detection and analysis, including
              development of custom signatures and analytics for Advanced
              Persistant Threat groups
            </li>
          </ul>
        </section>

        <section className="job-entry" id="rtm-job">
          <h4 className="title resume-job">Red Touch Media/Laduma</h4>
          <h4 className="subtitle resume-position">
            Project Manager, Production Manager
            <span style={{ float: "right" }}>June 2014 - Sep 2018</span>
          </h4>
          <ul>
            <li>
              Directed the execution and development of 200+ custom software
              solutions and 100+ virtual, augmented, and mixed reality projects
              by dual-continent teams of over 20 software engineers, producers,
              editors, and VFX artists
            </li>
            <li>
              Planned and executed virtual reality location shoots in Morocco,
              Namibia, and South Africa; France, the U.K., and Scotland; both
              eastern and western contiguous U.S., Hawaii, and Mexico
            </li>
          </ul>
        </section>

        <section className="job-entry" id="airforce-job">
          <h4 className="title resume-job">United States Air Force</h4>
          <h4 className="subtitle resume-position">
            Intelligence Analyst
            <span style={{ float: "right" }}>Oct 2006 - Aug 2013</span>
          </h4>
          <ul>
            <li>
              Achieved the rank of Staff Sergeant while serving as an Operations
              Intelligence Analyst for nearly seven years
            </li>
            <li>
              Decorated for meritorious service with the Bronze Star Medal,
              Joint Service Commendation and Achievement Medals, and Air Force
              Commendation Medal, along with numerous quarterly and yearly
              awards for leadership and volunteering
            </li>
            <li>
              Managed multiple teams of analysts at each level of the
              Intelligence Community, including developing robust training
              curriculum for junior analysts including research methods,
              executive-level presentation, and public speaking
            </li>
          </ul>
        </section>

        <h3 className="subtitle has-text-centered" id="resume-section">
          Education
        </h3>

        <section className="job-entry" id="uofu-job">
          <h4 className="title resume-job">University of Utah</h4>
          <h4 className="subtitle resume-position" id="uubc">
            Full-Stack Web Development Certification
            <span style={{ float: "right" }}>Aug 2020</span>
          </h4>
          <h4 className="subtitle resume-position">
            Bachelor of Science, Political Science
            <span style={{ float: "right" }}>May 2017</span>
          </h4>
        </section>

        <section className="job-entry" id="ccaf-job">
          <h4 className="title resume-job">
            Community College of the Air Force
          </h4>
          <h4 className="subtitle resume-position">
            Associate of Applied Science, Intelligence Studies
            <span style={{ float: "right" }}>Aug 2012</span>
          </h4>
        </section>

        <div className="has-text-centered">
          <button
            className="button is-link resume-button"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1M5neo9TAWAWNWh95rOTDvUnhJYWdolXW/view?usp=sharing",
                "_blank"
              )
            }
          >
            <FaDownload />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
