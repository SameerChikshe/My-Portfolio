export type AboutData = {
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

export const data: any = [
  {
    section: "Introduction",
    text: "Experienced UI/UX Designer passionate about creating intuitive and visually compelling digital experiences. Proficient in translating complex ideas into user-friendly interfaces, I specialize in crafting designs that seamlessly blend aesthetics with functionality. My skill set includes design thinking, wireframing, visual design, prototyping, and a strong proficiency in design tools",
    content: [],
  },
  {
    section: "Education",
    content: [
      {
        logo: "https://pbs.twimg.com/profile_images/1689610008663863297/va2NBydT_400x400.jpg",
        company: "SGGS Institute of Engineering & Technology, Nanded",
        role: "B.Tech",
        span: "2016 - 2020",
      },
      {
        logo: "https://shrishivajicollege.org/wp-content/uploads/2022/07/cropped-logo.jpg",
        company: "Shri Shivaji College, Parbhani",
        role: "HSC",
        span: "2016",
      },
      {
        logo: "https://media.licdn.com/dms/image/C4E0BAQFfI9tTyCgIhA/company-logo_200_200/0/1630597744597/bal_vidya_mandir_parbhani_logo?e=2147483647&v=beta&t=BmB7WJl2XvgWMSIm4cnujpgHPfkQ5f60srMHvbyvBkM",
        company: "Bal Vidya Mandir, Parbhani",
        role: "SSC",
        span: "2014",
      },
    ],
  },

  {
    section: "Experience",
    content: [
      {
        logo: "https://mir-s3-cdn-cf.behance.net/user/276/d549d54148311.58d8bcec00fb6.jpg",
        company: "Monsoonfish",
        role: "Front-end Developer",
        span: "Jan 2023 - Present",
      },
      {
        logo: "data:image/png;base64,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",
        company: "ThyssenKrupp",
        role: "Support Engineer",
        span: "Jan 2021 - Dec 2022",
      },
    ],
  },

  {
    section: "Skills",
    content: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        role: "React.js",
      },
      {
        logo: "https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png",
        role: "Next.js",
      },
      {
        logo: "https://t3.ftcdn.net/jpg/03/21/24/30/360_F_321243084_GstfWflk1eTLlzUdRZ5mjoP5IG1iCc8J.jpg",
        role: "JavaScript",
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        role: "TypeScript",
      },
    ],
  },
];
