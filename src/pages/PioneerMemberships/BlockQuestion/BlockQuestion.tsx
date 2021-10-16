import React, {FC, useState} from 'react';
import classNames from 'classnames';

export const BlockQuestion: FC = () => {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);

  return (
    <section className="memberships__question-block">
      <h2 className="memberships__question-heading">
        Frequently asked question
      </h2>
      <div className="memberships__question-inner">
        <div
          onClick={() => {
            setOpenOne(!openOne);
          }}
          className={classNames('memberships__question', {
            'memberships__question-open': openOne,
          })}
        >
          <h3 className="memberships__question-title">
            What is Pioneer Membership?
          </h3>
          <p className="memberships__question-subtitle">
            It’s an annual multipurpose benefits membership, accessible from
            multiple integrated platforms, starting with automatically free
            member and optional premium member plans.
          </p>
        </div>
        <div
          onClick={() => {
            setOpenTwo(!openTwo);
          }}
          className={classNames('memberships__question', {
            'memberships__question-open': openTwo,
          })}
        >
          <h3 className="memberships__question-title">
            What are premium Pioneer Membership Plans?
          </h3>
          <p className="memberships__question-subtitle">
            It’s an annual multipurpose benefits membership, accessible from
            multiple integrated platforms, starting with automatically free
            member and optional premium member plans.
          </p>
        </div>
        <div
          onClick={() => {
            setOpenThree(!openThree);
          }}
          className={classNames('memberships__question', {
            'memberships__question-open': openThree,
          })}
        >
          <h3 className="memberships__question-title">
            What is $DIVITS Token?
          </h3>
          <p className="memberships__question-subtitle">
            It’s an annual multipurpose benefits membership, accessible from
            multiple integrated platforms, starting with automatically free
            member and optional premium member plans.
          </p>
        </div>
        <div
          onClick={() => {
            setOpenFour(!openFour);
          }}
          className={classNames('memberships__question', {
            'memberships__question-open': openFour,
          })}
        >
          <h3 className="memberships__question-title">Why should I upgrade?</h3>
          <p className="memberships__question-subtitle">
            It’s an annual multipurpose benefits membership, accessible from
            multiple integrated platforms, starting with automatically free
            member and optional premium member plans.
          </p>
        </div>
        <div
          onClick={() => {
            setOpenFive(!openFive);
          }}
          className={classNames('memberships__question', {
            'memberships__question-open': openFive,
          })}
        >
          <h3 className="memberships__question-title">How to upgrade?</h3>
          <p className="memberships__question-subtitle">
            It’s an annual multipurpose benefits membership, accessible from
            multiple integrated platforms, starting with automatically free
            member and optional premium member plans.
          </p>
        </div>
      </div>
    </section>
  );
};
