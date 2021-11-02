import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderAllContacts from './HeaderAllContacts/HeaderAllContacts.jsx';
import { ContactDetails } from '../ListGroups/ContactDetails/ContactDetails';
const AllContacts = ({ config }) => (
  <section className="contact-book__main-content">
    <Switch>
      <Route path={`/contact-book/all-contacts/person`}>
        <ContactDetails config={config} />
      </Route>
      <Route path="/">
        <HeaderAllContacts config={config} />
      </Route>
    </Switch>
  </section>
);

export default AllContacts;
