import React from 'react';
import arrows from '../../../../assets/images/contactBook/Sort.svg';

export const TheadTable = () => (
  <tr className="contact-book__head-table">
    <th className="contact-book__th">Full name</th>
    <th className="contact-book__th contact-book__th-email">
      Email
      {/* <img className="contact-book__arrow-img" src={arrows} alt="sort" /> */}
    </th>
    <th className="contact-book__th contact-book__th-phone">
      Phone number
      <img className="contact-book__arrow-img" src={arrows} alt="sort" />
    </th>
    <th className="contact-book__th contact-book__th-social">
      Social media profile
      <img className="contact-book__arrow-img" src={arrows} alt="sort" />
    </th>
    <th className="contact-book__th contact-book__th-groups">
      Groups
      <img className="contact-book__arrow-img" src={arrows} alt="sort" />
    </th>
  </tr>
);
