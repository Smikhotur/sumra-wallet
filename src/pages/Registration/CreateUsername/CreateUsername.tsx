import React, {FC} from 'react';

export const CreateUsername: FC = () => {
  return (
    <>
      <h3 className="account__title">Create Username</h3>
      <h4 className="account__subtitle">
        Please provide following details for your new account
      </h4>
      <input
        className="account__input-text"
        placeholder="Enter username"
        type="text"
      />
      <button className="account__btn-continue">Sign Up</button>
    </>
  );
};
