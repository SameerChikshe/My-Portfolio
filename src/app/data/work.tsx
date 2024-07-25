import hk from "../../images/hk.jpg"


export type WorkData = {
  section: string;
  text: string;
  content: OrganisationDetails[];
};

export type OrganisationDetails = {
  logo: string;
  company: string;
  role: string;
  span: string;
};

export const work: WorkData = [
  {
    section: "HealthKart",
    content: [
      {
        logo: hk,
        company: "HealthKart",
        role: "B.Tech",
        span: "2016 - 2020",
      },
    ],
  },

  {
    section: "MuscleBlaze",
    content: [
      {
        logo: "https://assets-global.website-files.com/61b9a0d531bc5ea62566a3be/6229abe07c899183f607f51e_5.png",
        company: "HealthKart",
        role: "B.Tech",
        span: "2016 - 2020",
      },
    ],
  },

  {
    section: "TrueBasics",
    content: [
      {
        logo: "https://www.truebasics.com/",
        company: "HealthKart",
        role: "B.Tech",
        span: "2016 - 2020",
      },
    ],
  },

  {
    section: "HKVitals",
    content: [
      {
        logo: "https://www.hkvitals.com/",
        company: "HealthKart",
        role: "B.Tech",
        span: "2016 - 2020",
      },
    ],
  },

  {
    section: "Chat-Support NPAV",
    content: [
      {
        logo: "",
        company: "HealthKart",
        role: "B.Tech",
        span: "2016 - 2020",
      },
    ],
  },
];
