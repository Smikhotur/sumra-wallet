import React from 'react';
import { FormAddContact } from './FormAddContact/FormAddContact.jsx';
import { HeaderWallet } from '../HeaderWallet/HeaderWallet';

export const CreateContact = ({ config }) => {
  return (
    <section className="contact-book__main-content">
      <HeaderWallet page={'Create contact'} allData={false} config={config} />

      <FormAddContact config={config} />
    </section>
  );
};
