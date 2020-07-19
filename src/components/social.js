import React from 'react';
import styles from './social.module.css';

const SocialBlok = ({platform, socialclass, link}) => (
  <a className={`${styles.blok} ${socialclass}`} rel="noopener noreferrer" href={link} target="_blank" >
    <i className={`fab fa-${platform}`}></i>
    <span><strong>{platform}</strong>Nick Spaargaren</span>
  </a>
)

const Socials = () => {
  
  const Socials = [
    {id: 1, platform: 'Dribbble', class: styles.dribbble, link: 'https://dribbble.com/nickspaargaren'},
    {id: 2, platform: 'Github', class: styles.github, link: 'https://github.com/nickspaargaren'},
    {id: 3, platform: 'Youtube', class: styles.youtube, link: 'https://www.youtube.com/watch?v=zDiSkH9PPJg&list=PLrZcPERRIctdZztCmNMHQ11aOne2yYOX3'},
    {id: 4, platform: 'Linkedin', class: styles.linkedin, link: 'https://www.linkedin.com/in/nickspaargaren'}
  ];

  return (
      <div className={styles.houder}>
        {Socials.map(social =>
          <SocialBlok key={social.id} platform={social.platform} socialclass={social.class} link={social.link} />
        )}
      </div>
    );
}

export default Socials;