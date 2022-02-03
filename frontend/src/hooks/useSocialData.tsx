import React, { ReactElement } from "react";
import { FaDribbble, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

type SocialDataType = {
  id: number;
  platform: string;
  class: string;
  icon: ReactElement;
  url: string;
};

export const useSocialData = (): SocialDataType[] => [
  {
    id: 1,
    platform: "Dribbble",
    class: "dribbble",
    icon: <FaDribbble />,
    url: "https://dribbble.com/nickspaargaren",
  },
  {
    id: 2,
    platform: "Github",
    class: "github",
    icon: <FaGithub />,
    url: "https://github.com/nickspaargaren",
  },
  {
    id: 3,
    platform: "Youtube",
    class: "youtube",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/watch?v=zDiSkH9PPJg&list=PLrZcPERRIctdZztCmNMHQ11aOne2yYOX3",
  },
  {
    id: 4,
    platform: "Linkedin",
    class: "linkedin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/nickspaargaren",
  },
];
