import React from 'react';
import styles from './social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialList = [
  {id: 1, platform: 'Dribbble', class: styles.dribbble, link: 'https://dribbble.com/nickspaargaren'},
  {id: 2, platform: 'Github', class: styles.github, link: 'https://github.com/nickspaargaren'},
  {id: 3, platform: 'Youtube', class: styles.youtube, link: 'https://www.youtube.com/watch?v=zDiSkH9PPJg&list=PLrZcPERRIctdZztCmNMHQ11aOne2yYOX3'},
  {id: 4, platform: 'Linkedin', class: styles.linkedin, link: 'https://www.linkedin.com/in/nickspaargaren'}
];

const Socials = ({platform, socialclass, link}) => (
  <div className={styles.houder}>
    {SocialList.map(social =>
        <a key={social.id} className={`${styles.blok} ${social.class}`} rel="noopener noreferrer" href={social.link} target="_blank" >
          <FontAwesomeIcon icon={["fab", `${social.platform.toLowerCase()}`]} />
          <span><strong>{social.platform}</strong>Nick Spaargaren</span>
        </a>
    )}
  </div>
)

export default Socials;