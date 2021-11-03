import React, { FC, useState } from 'react';
import classNames from 'classnames';

export const LydianFooter: FC = () => {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);

  return (
    <section className="lydian__question-block">
      <h2 className="lydian__question-heading">Frequently asked question</h2>
      <div className="lydian__question-inner">
        <div
          onClick={() => {
            setOpenOne(!openOne);
          }}
          className={classNames('lydian__question', {
            'lydian__question-open': openOne,
          })}
        >
          <h3 className="lydian__question-title">
            What is Lydian premium membership?
          </h3>
          <p className="lydian__question-subtitle">
            Lydian is a premium paid membership that is available to registered
            users of Ultainfinity Exchange. Lydian members have numerous
            straightforward, simple benefits and products available to them;
            primarily centred around zero cost access to exchange trading, the
            ownership of wealth generating ultainfinity crypto assets and other
            leading cryptocurrencies through instant ultainfinity creditline and
            DASA Lending.
          </p>
        </div>
        <div
          onClick={() => {
            setOpenTwo(!openTwo);
          }}
          className={classNames('lydian__question', {
            'lydian__question-open': openTwo,
          })}
        >
          <h3 className="lydian__question-title">
            What are the main benefits of Lydian premium membership?
          </h3>
          <p className="lydian__question-subtitle">
            Lydian is a premium paid membership that is available to registered
            users of Ultainfinity Exchange. Lydian members have numerous
            straightforward, simple benefits and products available to them;
            primarily centred around zero cost access to exchange trading, the
            ownership of wealth generating ultainfinity crypto assets and other
            leading cryptocurrencies through instant ultainfinity creditline and
            DASA Lending.
          </p>
        </div>
        <div
          onClick={() => {
            setOpenThree(!openThree);
          }}
          className={classNames('lydian__question', {
            'lydian__question-open': openThree,
          })}
        >
          <h3 className="lydian__question-title">What is DASA?</h3>
          <p className="lydian__question-subtitle">
            Lydian is a premium paid membership that is available to registered
            users of Ultainfinity Exchange. Lydian members have numerous
            straightforward, simple benefits and products available to them;
            primarily centred around zero cost access to exchange trading, the
            ownership of wealth generating ultainfinity crypto assets and other
            leading cryptocurrencies through instant ultainfinity creditline and
            DASA Lending.
          </p>
        </div>
        <div
          onClick={() => {
            setOpenFour(!openFour);
          }}
          className={classNames('lydian__question', {
            'lydian__question-open': openFour,
          })}
        >
          <h3 className="lydian__question-title">
            {
              'What drives the price increases of $DIVITS Tokens & Ultainfinity Coins?'
            }
          </h3>
          <p className="lydian__question-subtitle">
            Lydian is a premium paid membership that is available to registered
            users of Ultainfinity Exchange. Lydian members have numerous
            straightforward, simple benefits and products available to them;
            primarily centred around zero cost access to exchange trading, the
            ownership of wealth generating ultainfinity crypto assets and other
            leading cryptocurrencies through instant ultainfinity creditline and
            DASA Lending.
          </p>
        </div>
        <div
          onClick={() => {
            setOpenFive(!openFive);
          }}
          className={classNames('lydian__question', {
            'lydian__question-open': openFive,
          })}
        >
          <h3 className="lydian__question-title">
            What makes Lydian Premium Membership so special?
          </h3>
          <p className="lydian__question-subtitle">
            Lydian is a premium paid membership that is available to registered
            users of Ultainfinity Exchange. Lydian members have numerous
            straightforward, simple benefits and products available to them;
            primarily centred around zero cost access to exchange trading, the
            ownership of wealth generating ultainfinity crypto assets and other
            leading cryptocurrencies through instant ultainfinity creditline and
            DASA Lending.
          </p>
        </div>
      </div>
    </section>
  );
};
