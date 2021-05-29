import React from 'react';
import Layout from '../../layout/layout';
import {Link} from 'gatsby';

import {FaCaretRight} from 'react-icons/fa';

import Youtube from '../../components/Youtube';

const Drone = () => {
  return (
    <Layout title={`Drone`} description="Drone videos" noindex>
      <div className="inhoud">
        <small>
          <ul className="bcrumbs">
            <li>
              <Link to="/portfolio">Home</Link>
            </li>
            <li>
              <FaCaretRight />
            </li>
            <li>Drone</li>
          </ul>
        </small>
      </div>

      <div className="inhoud">
        <div className="grid-2x">
          <Youtube url="https://www.youtube-nocookie.com/embed/CI7je7P7ask" />
          <Youtube url="https://www.youtube-nocookie.com/embed/06G-JPIPK0U" />
        </div>
      </div>
      <div className="inhoud">
        <div className="grid-2x">
          <Youtube url="https://www.youtube-nocookie.com/embed/Fp_LSgD7D9E" />
          <Youtube url="https://www.youtube-nocookie.com/embed/zDiSkH9PPJg" />
        </div>
      </div>
      <div className="inhoud">
        <div className="grid-2x">
          <Youtube url="https://www.youtube-nocookie.com/embed/mDX5lj4eepQ" />
        </div>
      </div>
    </Layout>
  );
};

export default Drone;
