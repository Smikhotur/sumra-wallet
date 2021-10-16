import React, {FC} from 'react';
import frame1 from '../../../assets/images/memberships/Frame1.svg';
import frame2 from '../../../assets/images/memberships/Frame2.svg';
import frame3 from '../../../assets/images/memberships/Frame3.svg';
import frame4 from '../../../assets/images/memberships/Frame4.svg';
import frame5 from '../../../assets/images/memberships/Frame5.svg';
import frame6 from '../../../assets/images/memberships/Frame6.svg';
import frame7 from '../../../assets/images/memberships/Frame7.svg';

import facebook from '../../../assets/images/memberships/facebook.svg';
import instagram from '../../../assets/images/memberships/instagrame.svg';
import twitter from '../../../assets/images/memberships/twitter.svg';
import yellow from '../../../assets/images/memberships/yellow.svg';
import red from '../../../assets/images/memberships/red.svg';

import redMen from '../../../assets/images/memberships/redMen.svg';
import blueMen from '../../../assets/images/memberships/blueMen.svg';
import youtube from '../../../assets/images/memberships/youtube.svg';

const sociale = [
  [frame1, frame2, frame3, frame4, frame5, frame6, frame7],
  [facebook, instagram, twitter, yellow, red],
  [redMen, blueMen, youtube],
];

export const BlockSubscribe: FC = () => {
  return (
    <section className="memberships__subscribe-block">
      <h2 className="memberships__subscribe-title">Subscribe</h2>
      <div className="memberships__subscribe-inner">
        <div className="memberships__subscribe-box">
          <h4 className="memberships__subscribe-subtitle">
            Join our channels:
          </h4>
          <div className="memberships__subscribe-block-sociale">
            {sociale[0].map((el) => (
              <img
                className="memberships__subscribe-img-sociale"
                key={el}
                src={el}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="memberships__subscribe-box">
          <h4 className="memberships__subscribe-subtitle">Follow us on:</h4>
          <div className="memberships__subscribe-block-sociale">
            {sociale[1].map((el) => (
              <img
                className="memberships__subscribe-img-sociale"
                key={el}
                src={el}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="memberships__subscribe-box">
          <h4 className="memberships__subscribe-subtitle">Connect with us:</h4>
          <div className="memberships__subscribe-block-sociale">
            {sociale[2].map((el) => (
              <img
                className="memberships__subscribe-img-sociale"
                key={el}
                src={el}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>

      <footer className="memberships__footer">
        <div className="memberships__footer-copy">
          © 2021 Pioneer Membership. All rights reserved.
        </div>
        <div className="memberships__footer-box">
          <div className="memberships__footer-policy">Privacy policy</div>
          <div className="memberships__footer-terms">Terms of use</div>
        </div>
      </footer>
    </section>
  );
};
