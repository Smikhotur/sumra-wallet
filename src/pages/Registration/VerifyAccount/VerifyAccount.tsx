import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import ReactCodeInput from 'react-verification-code-input';
import '../../../assets/scss/registration/account.scss';

export const VerifyAccount: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [autoFocus, setAutoFocus] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [fieldWidth, setFieldWidth] = useState(38);
  // eslint-disable-next-line no-unused-vars
  const [fieldHeight, setFieldHeight] = useState(44);
  const [code, setCode] = useState('');
  const [open, setOpen] = useState(false);

  console.log(code);

  const handleChange = (vals) => {
    setCode(vals);
  };
  const handleComplete = (val) => {
    setCode(val);
  };

  const message = () => {
    if (+code.length !== 6) {
      setOpen(!open);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  return (
    <>
      <h3 className="account__title">Verify Account!</h3>
      <h4 className="account__subtitle">
        <div className="account__subtitle-inner">
          Enter <strong className="account__strong">6 digit</strong>{' '}
          verification code we have sent to
          <span className="account__number">+44 7788 554433</span>
        </div>
      </h4>
      {open && <div className="account__message">Incorrect code</div>}
      <ReactCodeInput
        className="account__input"
        autoFocus={autoFocus}
        fieldWidth={fieldWidth}
        fieldHeight={fieldHeight}
        onChange={handleChange}
        onComplete={handleComplete}
        values={code.split('')}
      />

      <div className="account__question">Didn‘t receive our code?</div>
      <button className="account__send-code">Resend Code</button>
      <Link
        onClick={message}
        to={
          code.length === 6
            ? '/registration_page/create_username'
            : '/registration_page/verify_account'
        }
        className="account__btn-continue"
      >
        Continue
      </Link>
    </>
  );
};
