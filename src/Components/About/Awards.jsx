import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const awardList = [
  {
    id: 1,
    awardName: "Weiterbildung zum Back-End Developer",
    contest: "Knowledge Academy | ASP.NET Core, C#, SQL, MongoDB, Node.js",
    year: "2025–2026",
  },
  {
    id: 2,
    awardName: "Weiterbildung zum Front-End Developer",
    contest: "Knowledge Academy | React, Vue, Tailwind CSS, Bootstrap, Material UI",
    year: "2024–2025",
  },
  {
    id: 3,
    awardName: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung",
    contest: "JaStech GmbH, Münster | IHK-Abschluss",
    year: "2021–2024",
  },
  {
    id: 4,
    awardName: "Weiterbildung zum Webanwendungsentwickler",
    contest: "Knowledge Academy | PHP, Laravel, HTML, CSS, React",
    year: "2020–2021",
  },
  {
    id: 5,
    awardName: "Weiterbildung zum Qualitätsmanagement-Assistenten",
    contest: "HRC Akademie GmbH, Münster | Qualitätsmanagement und Kommunikation",
    year: "2019",
  },
  {
    id: 6,
    awardName: "Deutschsprachkurs B2",
    contest: "Bildungsinstitut Münster e. V., Münster",
    year: "2018–2019",
  },
  {
    id: 7,
    awardName: "Deutschsprachkurs B1",
    contest: "Werkstatt für Bildung und Kultur, Münster",
    year: "2016–2017",
  },
  {
    id: 8,
    awardName: "Spezialisierungsdiplom Informatik-Management",
    contest: "Hochschulinstitut für Verwaltung, Damaskus",
    year: "2013–2014",
  },
  {
    id: 9,
    awardName: "Integration von Technologien in der Bildung",
    contest: "Weiterbildungsstudiengang | Abschluss: Zertifikat",
    year: "2010–2011",
  },
  {
    id: 10,
    awardName: "Studium der Islamwissenschaft",
    contest: "Universität Damaskus | Abschluss: Diplom",
    year: "2007–2011",
  },
  {
    id: 11,
    awardName: "Allgemeine Schulbildung",
    contest: "Maruf Alarnoot Schule, Damaskus",
    year: "1994–2006",
  },
];

const Awards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="awards-section" id="awards">
      <div className="container">
        <div
          className="awards-wrapper"
          data-aos="fade-up"
        >
          <div className="awards-header">
            <h2 className="awards-title">Education & Qualifications</h2>
            <a href="#portfolio" className="awards-link">
              <span>View My Work</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="awards-table">
            {awardList.map(({ id, awardName, contest, year }) => (
              <div className="awards-row" key={id}>
                <div className="awards-col awards-name">
                  <h3>{awardName}</h3>
                </div>
                <div className="awards-col awards-org">
                  <p>{contest}</p>
                </div>
                <div className="awards-col awards-year">
                  <span>{year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;