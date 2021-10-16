import React, {useState, FC, useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {Redirect} from 'react-router';
import ReactCodeInput from 'react-verification-code-input';
import logout from '../../assets/images/sumra/icon-logout.svg';
import {withAuthMain} from '../../components/hoc/withAuthMain';
import {getVerificationCode} from '../../store/auth/actions';
import {AppStateType} from '../../store/reducers';

type PropsType = {
  autoFocus: boolean;
  fieldWidth: number;
  fieldHeight: number;
  type: 'number' | 'text';
  fields: number;
  className: string;
  // eslint-disable-next-line no-unused-vars
  getVerificationCode: (code: string) => void;
};

const ConfirmForm: FC<PropsType> = ({
  autoFocus = true,
  fieldWidth = 38,
  fieldHeight = 44,
  type = 'text',
  fields = 6,
  className,
  getVerificationCode,
}) => {
  const [code, setCode] = useState('');
  const isAuthSuccess = useSelector(
    (state: AppStateType) => state.authReducer.isAuth
  );
  const [isAuth, setIsAuth] = useState(false);

  const submitVerificationCode = (event) => {
    event.preventDefault();

    const isComplete = code.length === fields;

    if (isComplete) {
      getVerificationCode(code);
    }
  };
  useEffect(() => {
    setIsAuth(isAuthSuccess);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitVerificationCode]);

  const handleChange = (vals) => {
    setCode(vals);
  };
  const handleComplete = (val) => {
    setCode(val);
  };
  className += ' verification-code-form';

  {
    if (isAuth) return <Redirect to={'/userform'} />;

    return (
      <div className={className}>
        <h1 className="h1-title">Confirmation Access</h1>

        <form>
          <h2 className="h2-label">Enter the six-digit verification code.</h2>

          <ReactCodeInput
            autoFocus={autoFocus}
            className="sumra-react-code-input"
            type={type}
            fieldWidth={fieldWidth}
            fieldHeight={fieldHeight}
            onChange={handleChange}
            onComplete={handleComplete}
            values={code.split('')}
          />

          <button className="sumra-Button" onClick={submitVerificationCode}>
            <img
              className="sumra-Button-icon-left"
              src={logout}
              width="18"
              alt="logout"
            />

            <span>Continue</span>
          </button>
        </form>
      </div>
    );
  }
};

export default connect(null, {getVerificationCode})(withAuthMain(ConfirmForm));
