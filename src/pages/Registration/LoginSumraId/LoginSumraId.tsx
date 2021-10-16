import React, {FC} from 'react';

export const LoginSumraId: FC = () => {
  return (
    <>
      <h3 className="account__title">Login with Sumra ID</h3>
      <h4 className="account__subtitle">
        Please provide following details to login into your account
      </h4>
      <form className="account__form" method="#">
        <input
          required
          className="account__input-text"
          placeholder="Enter username"
          type="text"
        />

        <input
          required
          className="account__input-text"
          placeholder="Enter password"
          type="text"
        />
        <button type="submit" className="account__btn-continue">
          Sign Up
        </button>
      </form>
    </>
  );
};
