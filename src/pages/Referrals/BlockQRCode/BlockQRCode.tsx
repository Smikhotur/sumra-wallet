import React, {FC, useEffect, useState} from 'react';
import QRCode from 'qrcode.react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import codeBtn from '../../../assets/images/referrals/copy.svg';
import users from '../../../assets/images/referrals/users.svg';
import userPlus from '../../../assets/images/referrals/userPlus.svg';
import edit from '../../../assets/images/referrals/edit.svg';
import people from '../../../assets/images/referrals/people.svg';
import usersPlu from '../../../assets/images/referrals/usersPlu.svg';
import '../../../assets/scss/referrals/blockQRCode.scss';
import {actions} from '../../../store/referrals/action';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

export const BlockQRCode: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [copy, setCopy] = useState('');
  const [visible, setVisible] = useState(false);
  const [qrCode, setqrCode] = useState('');
  const listCodes = useSelector(
    (state: RootStateOrAny) => state.referralReducer.referralCodes
  );
  // const referralCode = useSelector(
  //   (state: RootStateOrAny) => state.referralReducer.referralCode
  // );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fatchReferrals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isCopy = ({currentTarget: {id}}) => {
    setVisible(id);

    setTimeout(() => setVisible(''), 2000);
  };

  const removeCode = (id) => {
    dispatch(actions.removeReferrals(id));
  };

  return (
    <section className="referrals-page__block-QR-code block-QR-code">
      <div className="block-QR-code__inner-list">
        <div className="block-QR-code__inner-list-scrall">
          <div className="block-QR-code__box-list">
            <h3 className="block-QR-code__title">Your referral links list</h3>
            <ul className="block-QR-code__list">
              {listCodes.length !== 0 && listCodes !== undefined
                ? listCodes.map((code) => (
                    <li
                      key={code.id}
                      className="block-QR-code__item block-QR-code__item-first"
                    >
                      <div className="block-QR-code__referral-code">
                        {visible === code.code && (
                          <div className="block-QR-code__copy-text">
                            Сopied to the clipboard
                          </div>
                        )}

                        <span className="block-QR-code__referral-text">
                          <button
                            onClick={() => {
                              removeCode(code.id);
                            }}
                            className="block-QR-code__btn-remove"
                            type="button"
                          >
                            <strong>X</strong>
                          </button>
                          <span
                            style={{cursor: 'pointer'}}
                            onClick={() => {
                              setqrCode(code.link);
                            }}
                          >
                            {code.code}
                          </span>
                          <CopyToClipboard
                            text={code.code}
                            onCopy={() => setCopy(true)}
                          >
                            <img
                              onClick={isCopy}
                              id={code.code}
                              className="block-QR-code__copy-image"
                              src={codeBtn}
                              alt=""
                            />
                          </CopyToClipboard>
                        </span>
                      </div>
                      <div className="block-QR-code__default">Default</div>
                      <div className="block-QR-code__invited">
                        <img src={users} alt="" />
                        Invited users
                        <span className="block-QR-code__invited-col">253</span>
                      </div>
                      <div className="block-QR-code__btn-ivite">
                        <img
                          className="block-QR-code__btn-ivite-img"
                          src={userPlus}
                          alt=""
                        />
                        Invite
                      </div>
                      <div className="block-QR-code__btn-edit">
                        <img
                          className="block-QR-code__btn-edit-img"
                          src={edit}
                          alt=""
                        />
                        Edit
                      </div>
                    </li>
                  ))
                : ''}
            </ul>
          </div>
        </div>

        <div className="block-QR-code__box-QR">
          <h3 className="block-QR-code__title">QR code</h3>
          <div className="block-QR-code__qrcode">
            {qrCode ? (
              <QRCode id="789" value={qrCode} />
            ) : listCodes.length > 0 ? (
              <QRCode id="789" value={listCodes[listCodes.length - 1].link} />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div className="block-QR-code__box-unlimited">
        <div className="block-QR-code__wrapper-unlimited">
          <div className="block-QR-code__unlimited-text">
            Get up to $250 <br />
            for Referrals. <br />
            <span className="block-QR-code__unlimited-text-color">
              Earn Unlimited.
            </span>
          </div>
          <img src={people} alt="" />
        </div>

        <button className="block-QR-code__unlimited-btn" type="button">
          <img
            className="block-QR-code__unlimited-btn-img"
            src={usersPlu}
            alt=""
          />
          Invite a Friend
        </button>
      </div>
    </section>
  );
};
