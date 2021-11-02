import React from 'react';
import {Route, Switch} from 'react-router';
import {ContactDetails} from './ContactDetails/ContactDetails.jsx';
import {HeaderTable} from './HeaderTable/HeaderTable.jsx';

export const ListGroups = ({pathName, config}) => (
  <section className="contact-book__main-content">
    <Switch>
      <Route path={`${pathName}/person`}>
        <ContactDetails config={config} />
      </Route>
      <Route path="/">
        <HeaderTable config={config} />
      </Route>
    </Switch>
  </section>
);
