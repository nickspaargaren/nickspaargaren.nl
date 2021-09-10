import React from 'react';
import Layout from '../../layout/layout';
import {Link} from 'gatsby';

import {FaCaretRight} from 'react-icons/fa';

import Youtube from '../../components/Youtube';
import {useSiteMetadata} from '../../data/hooks/algemeen';

const Drone = () => {
  const {naam} = useSiteMetadata();

  return (
    <Layout title={`Drone videos | ${naam}`} description="Drone videos" noindex>
      <div className="inhoud">
        <small>
          <ul className="bcrumbs">
            <li>
              <Link to="/portfolio">Home</Link>
            </li>
            <li>
              <FaCaretRight />
            </li>
            <li>Drone videos</li>
          </ul>
        </small>
      </div>

      <div className="inhoud">
        <div className="grid-2x">
          <Youtube
            title="Zaanse schans"
            url="https://www.youtube-nocookie.com/embed/CI7je7P7ask"
          />
          <Youtube
            title="Naarden-Vesting | Muiderslot | Aug 2018"
            url="https://www.youtube-nocookie.com/embed/06G-JPIPK0U"
          />
        </div>
      </div>
      <div className="inhoud">
        <div className="grid-2x">
          <Youtube
            title="Gooimeer - Flevoland - 26 July 2018"
            url="https://www.youtube-nocookie.com/embed/Fp_LSgD7D9E"
          />
          <Youtube
            title="Portugal Guincho - July 2018"
            url="https://www.youtube-nocookie.com/embed/zDiSkH9PPJg"
          />
        </div>
      </div>
      <div className="inhoud">
        <div className="grid-2x">
          <Youtube
            title="Help Quintus de modder door | Actie Hersenstichting Mudmaster Marathon."
            url="https://www.youtube-nocookie.com/embed/mDX5lj4eepQ"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Drone;
