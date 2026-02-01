export interface Experience {
  company: string;
  location: string;
  roles: {
    title: string;
    startDate: string;
    endDate: string;
    highlights: string[];
  }[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const profile = {
  name: "Ken Zink",
  title: "Senior Software Engineer",
  subtitle: "Formerly SDET Manager",
  location: "Eagle, Idaho",
  email: "ken.zink@proton.me",
  phone: "(208) 440-6526",
  
  social: {
    linkedin: "https://www.linkedin.com/in/ken-zink-89b4295/",
    github: "https://github.com/Morpheis",
    email: "mailto:ken.zink@proton.me",
  },

  summary: `Detail-oriented engineering leader with over 15 years of experience in SDLC, test automation, and team leadership. Expert in designing custom test frameworks using Selenium, Appium, RestAssured, and Cypress for SaaS, web, and mobile platforms. Proven Agile leader, mentoring teams to achieve 90%+ test coverage and reduce defects by 80%+ in CI/CD pipelines.`,

  about: [
    `I've spent my career at the intersection of quality and engineering — from building my first Selenium prototype at Scentsy to leading QA teams and architecting test frameworks at scale.`,
    `Now at Hashbranch, I've transitioned from Senior QA Engineer to Senior Software Engineer, bringing that quality-first mindset to Bitcoin mining infrastructure and fintech applications.`,
    `When I'm not writing code, you'll find me exploring Idaho's outdoors, diving into blockchain technology, or mentoring the next generation of engineers.`,
  ],

  experience: [
    {
      company: "Hashbranch, Inc.",
      location: "Remote",
      roles: [
        {
          title: "Senior Software Engineer",
          startDate: "Dec 2025",
          endDate: "Present",
          highlights: [
            "Own the end-to-end quality strategy for Hashbranch's Bitcoin mining commerce platform, defining testing standards, release validation processes, and QA frameworks that ensure platform reliability at scale",
            "Architect and maintain automated test suites across UI, API, and integration layers, embedding them directly into CI/CD pipelines to enable continuous validation with every deployment",
            "Contribute to the production codebase through bug fixes, feature work, and improvements while reviewing pull requests with a quality-first lens, assessing testability and risk across every change",
            "Monitor platform health by analyzing logs, metrics, and error reports, proactively surfacing issues and driving continuous improvements to QA tooling and automation frameworks",
            "Partner closely with product and engineering to clarify requirements, define acceptance criteria, and validate release readiness throughout Agile sprint cycles",
          ],
        },
        {
          title: "Senior QA Engineer",
          startDate: "Apr 2025",
          endDate: "Dec 2025",
          highlights: [
            "Established QA processes and testing infrastructure from scratch for Hashbranch's Bitcoin mining commerce platform, setting quality standards across the engineering organization as the first dedicated QA hire",
            "Designed and implemented automated test suites using Playwright and Cypress, integrating them into CI/CD pipelines to deliver continuous regression coverage across web applications",
            "Built comprehensive API testing strategies with Postman and custom automation scripts, validating reliability across fintech and commerce backend services",
            "Collaborated with engineers and product managers within Agile/Scrum workflows to define test strategies, surface defects early in the development cycle, and drive continuous quality improvement",
          ],
        },
      ],
    },
    {
      company: "Fitted USA Inc.",
      location: "Boise, ID",
      roles: [
        {
          title: "Senior Lead SDET",
          startDate: "2021",
          endDate: "2024",
          highlights: [
            "Pioneered QA processes as the inaugural SDET at a 0-to-1 startup, building scalable testing infrastructure from scratch",
            "Designed and implemented a Java-based automation framework for API testing using RestAssured and JUnit 5, reducing defect detection time by over 50%",
            "Recruited and mentored a team of 2 Engineers, cutting development costs by 20%",
            "Provided critical cross-department support leveraging deep knowledge of microservice architecture and payment systems, boosting operational efficiency by 25%",
          ],
        },
      ],
    },
    {
      company: "Bodybuilding.com",
      location: "Meridian, ID",
      roles: [
        {
          title: "Senior Mobile SDET",
          startDate: "2019",
          endDate: "2020",
          highlights: [
            "Deployed a mobile automation framework using Appium and Selenium Grid, enabling parallel testing across 12 real iOS/Android devices",
            "Reduced test execution time by 75% through framework optimization",
            "Achieved 90%+ application code coverage in automated test suites through white-box testing",
            "Maintained CI/CD pipelines, triaging test failures to ensure high deployment success rate",
          ],
        },
        {
          title: "Senior SDET",
          startDate: "2013",
          endDate: "2018",
          highlights: [
            "Led a team of SDETs to design a new automation framework, increasing regression test coverage by 80%",
            "Developed API test suites for microservices using white-box techniques, reducing bugs by 95% before production",
            "Mentored multiple manual QA engineers pursuing SDET careers within the company",
            "Triaged and maintained automated tests to ensure up-to-date microservice coverage",
          ],
        },
      ],
    },
    {
      company: "Jelli Inc.",
      location: "Boise, ID",
      roles: [
        {
          title: "Software Engineering Manager, QA",
          startDate: "2018",
          endDate: "2019",
          highlights: [
            "Directed a team of 4 SDETs to develop and maintain test frameworks, achieving 90%+ test coverage",
            "Oversaw CI/CD-driven releases via Jenkins with automated regression testing, reducing new defects by 60%",
            "Partnered with engineering managers to allocate testing resources, meeting all project deadlines ahead of schedule",
            "Led recruitment efforts by creating job descriptions and conducting candidate interviews",
          ],
        },
      ],
    },
    {
      company: "Scentsy Inc.",
      location: "Boise, ID",
      roles: [
        {
          title: "QA Software Developer",
          startDate: "2011",
          endDate: "2013",
          highlights: [
            "Built a prototype automated testing solution using Selenium IDE to demonstrate web interface testing capabilities",
            "Co-led development of the company's first Selenium-based automation framework, increasing test coverage by 100%",
            "Reduced manual testing effort by 50% through automation implementation",
            "Wrote custom SQL queries to identify and manipulate test environment data",
          ],
        },
      ],
    },
  ] as Experience[],

  skills: [
    {
      category: "Languages",
      items: ["Java", "Kotlin", "TypeScript", "Python", "C#", "JavaScript", "Solidity"],
    },
    {
      category: "Testing",
      items: ["Selenium", "Appium", "Cypress", "Playwright", "RestAssured", "JUnit 5", "TestNG", "Cucumber"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Jenkins", "Docker", "Kubernetes", "AWS", "GCS", "CI/CD Pipelines"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
    },
    {
      category: "AI & Tools",
      items: ["Claude", "ChatGPT", "Grok", "Cursor", "Clawdbot", "GitHub Copilot", "Prompt Engineering"],
    },
    {
      category: "Platforms",
      items: ["macOS", "Linux", "Windows", "Android", "iOS"],
    },
  ] as Skill[],

  education: {
    school: "Boise State University",
    focus: "Computer Science Coursework",
  },
};
