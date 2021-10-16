import React, {FC} from 'react';
import Confetti from 'react-confetti';
import {useSelector, RootStateOrAny} from 'react-redux';
import close from '../../../assets/images/memberships/close.svg';
import gold from '../../../assets/images/memberships/gold.png';
import silver from '../../../assets/images/memberships/silver.png';
import bronze from '../../../assets/images/memberships/bronze.png';
import '../../../assets/scss/memberships/modalCongrats.scss';
import {useHistory} from 'react-router-dom';
import Modal, {IProps} from '../../../modal';

export const ModalCongrats: FC<IProps> = ({onClick}) => {
  const params = new URLSearchParams(location.search);
  const history = useHistory();
  const nameBronzeBtn = useSelector(
    (state: RootStateOrAny) => state.pioneerReducer.nameBronzeBtn
  );
  const getMedal = () => {
    if (nameBronzeBtn === 'Bronze') {
      return bronze;
    }
    if (nameBronzeBtn === 'Silver') {
      return silver;
    }
    if (nameBronzeBtn === 'Gold') {
      return gold;
    }
  };
  return params.get('cong-pionner') ? (
    <Modal onClick={onClick}>
      <section className="memberships__modal-form-block">
        <Confetti style={{width: '100%', height: '100%'}} />

        <div className="memberships__modal-inner">
          <div className="memberships__modal-header">
            <p className="memberships__modal-title">Congrats!</p>
            <img
              className="memberships__modal-close"
              src={close}
              alt="button close"
              onClick={() => {
                history.push(location.pathname);
              }}
            />
          </div>
          <div className="memberships__modal-finish-block">
            <h4 className="memberships__modal-title-pay">
              {'You have upgrated to'}
              <span className="memberships__modal-title-color">
                {` ${nameBronzeBtn} Member `}
              </span>
              {'successfully!'}
            </h4>

            <img src={getMedal()} alt="" />
            <button
              onClick={() => {
                history.push(location.pathname);
              }}
              className="memberships__modal-finish"
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </Modal>
  ) : null;
};
