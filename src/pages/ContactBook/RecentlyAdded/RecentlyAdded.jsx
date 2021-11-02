import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ContactDetails} from '../ListGroups/ContactDetails/ContactDetails.jsx';
import HeaderAllContacts from '../AllContacts/HeaderAllContacts/HeaderAllContacts.jsx';

export const RecentlyAdded = ({config}) => (
  <section className="contact-book__main-content">
    <Switch>
      <Route path={`/contact-book/recently-added/person`}>
        <ContactDetails config={config} />
      </Route>
      <Route path="/">
        <HeaderAllContacts config={config} />
      </Route>
    </Switch>
  </section>
);
