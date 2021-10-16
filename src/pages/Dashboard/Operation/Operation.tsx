import React, {FC} from 'react';
import arrowUp from '../../../assets/images/Dashboard/arrowUp.svg';
import arrowDown from '../../../assets/images/Dashboard/arrowDown.svg';
import arrowsLeftRight from '../../../assets/images/Dashboard/arrowsLeftRight.svg';
import minus from '../../../assets/images/Dashboard/minus.svg';
import plus from '../../../assets/images/Dashboard/Plus.svg';

export const Operation: FC = () => {
  return (
    <section className="dashboard__operation-inner">
      <div className="dashboard__operation-box">
        <img src={arrowUp} alt="" className="dashboard__operation-img" />
        <div className="dashboard__operation-text">Send</div>
      </div>
      <div className="dashboard__operation-box">
        <img src={arrowDown} alt="" className="dashboard__operation-img" />
        <div className="dashboard__operation-text">Receive</div>
      </div>
      <div className="dashboard__operation-box">
        <img
          src={arrowsLeftRight}
          alt=""
          className="dashboard__operation-img"
        />
        <div className="dashboard__operation-text">History</div>
      </div>
      <div className="dashboard__operation-box">
        <img src={minus} alt="" className="dashboard__operation-img" />
        <div className="dashboard__operation-text">Deposit</div>
      </div>
      <div className="dashboard__operation-box">
        <img src={plus} alt="" className="dashboard__operation-img" />
        <div className="dashboard__operation-text">Withdraw</div>
      </div>
    </section>
  );
};
