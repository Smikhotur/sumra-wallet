import React from 'react';
import arrows from '../../../../../assets/images/contactBook/Sort.svg';

export const TheadTableReferred = () => (
  <tr className="contact-book__head-table">
    <th className="contact-book__th">Full name</th>
    <th className="">
      Email
      <img className="contact-book__arrow-img" src={arrows} alt="sort" />
    </th>
    <th className="">
      Phone number
      <img className="contact-book__arrow-img" src={arrows} alt="sort" />
    </th>
    <th className="">Used comunication platform</th>
  </tr>
);
