import hk from "../../images/healthkart.png"
import mb from "../../images/mb.png"
import tb from "../../images/tb.png"
import hkv from "../../images/hkv.png"


export type WorkData = {
  section: string;
  content: OrganisationDetails[];
};

export type OrganisationDetails = {
  logo: any;
  company: string;
  url:string
};

export const work: WorkData[] = [
  {
    section: "HealthKart",
    content: [
      {
        logo: hk,
        company: "HealthKart",
        url:"https://www.healthkart.com/"
      },
    ],
  },

  {
    section: "MuscleBlaze",
    content: [
      {
        logo: mb,
        company: "MuscleBlaze",
        url:"https://www.muscleblaze.com/"
      },
    ],
  },

  {
    section: "TrueBasics",
    content: [
      {
        logo: tb,
        company: "TrueBasics",
        url: "https://www.truebasics.com/",
      },
    ],
  },

  {
    section: "HKVitals",
    content: [
      {
        logo: hkv,
        company: "HKVitals",
        url: "https://www.hkvitals.com/",
      },
    ],
  },

  {
    section: "Chat-Support NPAV",
    content: [
      {
        logo: "",
        company: "HealthKart",
        url:""
      },
    ],
  },
];
