import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContactDetails } from '../ListGroups/ContactDetails/ContactDetails.jsx';
import { HeaderRefred } from './HeaderRefred/HeaderRefred.jsx';

export const ReferredContactBook = ({ config }) => {
  return (
    <section className="contact-book__main-content">
      <Switch>
        <Route path={`/contact-book/referred-contact-book/person`}>
          <ContactDetails config={config} />
        </Route>
        <Route path="/">
          <HeaderRefred config={config} />
        </Route>
      </Switch>
    </section>
  );
};
