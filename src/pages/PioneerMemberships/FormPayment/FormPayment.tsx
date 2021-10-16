import React, {FC, useEffect, useState} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../../assets/scss/memberships/formPayment.scss';
import {FormGroup, Input} from 'reactstrap';
import close from '../../../assets/images/memberships/close.svg';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';
import Modal, {IProps} from '../../../modal';
import {Link, useHistory} from 'react-router-dom';
import {actions} from '../../../store/PioneerMemberships/actions';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';

export const FormPayment: FC<IProps> = ({onClick}) => {
  const dispatch = useDispatch();
  const params = new URLSearchParams(location.search);
  const history = useHistory();
  const nameBronzeBtn = useSelector(
    (state: RootStateOrAny) => state.pioneerReducer.nameBronzeBtn
  );

  const [information, setInformation] = useState({
    memberPlan: 'Pioneer member plan: Silver - $99.00',
    nameCard: '',
    addressLine: '',
    city: '',
    country: '',
    state: '',
  });

  useEffect(() => {
    if (nameBronzeBtn === 'Bronze') {
      setInformation({
        ...information,
        memberPlan: 'Pioneer member plan: Silver - $99.00',
      });
    }
    if (nameBronzeBtn === 'Silver') {
      setInformation({
        ...information,
        memberPlan: 'Pioneer member plan: Silver - $199.00',
      });
    }
    if (nameBronzeBtn === 'Gold') {
      setInformation({
        ...information,
        memberPlan: 'Pioneer member plan: Gold - $399.00',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameBronzeBtn]);
  const result = parseInt(information.memberPlan.match(/\d+/));

  const applayForMembership = ({target}: any): void => {
    const {value, name} = target;
    console.log(value);
    setInformation({...information, [name]: value});
  };

  const MY = (props) => (
    <InputMask
      mask="99 / 99"
      value={props.value}
      className="memberships__modal-my"
      onChange={props.onChange}
      placeholder="M / Y"
      required
    >
      {(inputProps) => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  );

  const CVV = (props) => (
    <InputMask
      mask="999"
      value={props.value}
      className="memberships__modal-cvv"
      onChange={props.onChange}
      placeholder="CVV"
      required
    >
      {(inputProps) => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  );

  const CardNumber = (props) => (
    <InputMask
      mask="9999  9999  9999  9999"
      name="cardNumber"
      value={props.value}
      className="memberships__modal-number"
      onChange={props.onChange}
      placeholder="Card number"
      required
    >
      {(inputProps) => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  );
  const buyMembership = () => {
    dispatch(actions.activeUpdradeButton(false));
    dispatch(actions.activePayButton(true));

    if (nameBronzeBtn === 'Bronze') {
      dispatch(actions.activeBronzeButton(true));
      dispatch(actions.activeBasicButton(false));
    }

    if (nameBronzeBtn === 'Silver') {
      dispatch(actions.activeSilverButton(true));
      dispatch(actions.activeBronzeButton(false));
      dispatch(actions.activeBasicButton(false));
    }

    if (nameBronzeBtn === 'Gold') {
      dispatch(actions.activeGoldButton(true));
      dispatch(actions.activeBronzeButton(false));
      dispatch(actions.activeSilverButton(false));
      dispatch(actions.activeBasicButton(false));
    }
  };
  return params.get('payment-details') ? (
    <Modal onClick={onClick}>
      <ReactCSSTransitionGroup
        transitionName="anim"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <section className="memberships__modal-form-block">
          <div className="memberships__modal-inner">
            <div className="memberships__modal-header">
              <p className="memberships__modal-title">Payment details</p>
              <img
                className="memberships__modal-close"
                src={close}
                alt="button close"
                onClick={() => {
                  history.push(location.pathname);
                }}
              />
            </div>
            <form
              onSubmit={buyMembership}
              method="POST"
              action=""
              className="memberships__modal-form"
            >
              <Input
                className="memberships__modal-select"
                type="select"
                name="memberPlan"
                value={information.memberPlan}
                onChange={applayForMembership}
              >
                <option className="memberships__modal-select-option">
                  Pioneer member plan: Bronze - $99.00
                </option>
                <option>Pioneer member plan: Silver - $199.00</option>
                <option>Pioneer member plan: Gold - $399.00</option>
              </Input>

              <div className="memberships__modal-card-number">
                <CardNumber />
                <FormGroup className="mb-0">
                  <div className="memberships__modal-card-number-inner">
                    <MY />
                    <CVV />
                  </div>
                </FormGroup>
              </div>
              <Input
                type="text"
                name="nameCard"
                value={information.nameCard}
                onChange={applayForMembership}
                className="form-control memberships__modal-name-card"
                id="formrow-firstname-Input"
                placeholder="Name on card"
                required
              />
              <div className="memberships__modal-address-city">
                <Input
                  type="text"
                  className="form-control memberships__modal-address"
                  id="formrow-InputCity"
                  placeholder="Address line"
                  required
                  name="addressLine"
                  value={information.addressLine}
                  onChange={applayForMembership}
                />
                <Input
                  type="text"
                  className="form-control memberships__modal-city"
                  id="formrow-InputCity"
                  placeholder="City"
                  required
                  name="city"
                  value={information.city}
                  onChange={applayForMembership}
                />
              </div>
              <div className="memberships__modal-address-city memberships__border-form">
                <select
                  id="formrow-InputState"
                  className="form-control memberships__modal-country"
                  required
                  name="country"
                  value={information.country}
                  onChange={applayForMembership}
                >
                  <option defaultValue="">Select a country</option>
                  <option>...</option>
                </select>
                <Input
                  type="text"
                  className="form-control memberships__modal-state"
                  id="formrow-InputCity"
                  placeholder="State"
                  required
                  name="state"
                  value={information.state}
                  onChange={applayForMembership}
                />
              </div>

              <div className="memberships__modal-btn-block">
                <Link
                  to={{
                    pathname: '/pioneer_memberships',
                    search: '?cong-pionner=true',
                  }}
                >
                  <button
                    onClick={buyMembership}
                    type="submit"
                    className="memberships__modal-buy"
                  >
                    {`Charge My Card $${result} Now`}
                  </button>
                </Link>
                <button
                  onClick={() => {
                    history.push(location.pathname);
                  }}
                  className="memberships__modal-cancel"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </section>
      </ReactCSSTransitionGroup>
    </Modal>
  ) : null;
};
