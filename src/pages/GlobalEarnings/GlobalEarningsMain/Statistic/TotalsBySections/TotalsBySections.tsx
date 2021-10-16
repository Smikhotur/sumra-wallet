import React, {FC} from 'react';
import '../../../../../assets/scss/statistics/statistics.scss';
import {IoInformationCircleOutline} from 'react-icons/io5';
import {ProgressBar} from 'react-bootstrap';
import {Sparklines, SparklinesBars, SparklinesLine} from 'react-sparklines';
import arrow from '../../../../../assets/images/leaderboard/arrow.svg';
import arrowRed from '../../../../../assets/images/leaderboard/arrowRed.svg';

export const TotalsBySections: FC = () => {
  const now = Math.round((650 / 985) * 100);
  const sampleData = Array.from({length: 40}).map(
    (unused, i) => i + (i + 1) * Math.random()
  );

  const data = Array.from({length: 40}).map(
    (unused, i) => i + (i + 1) * Math.random()
  );

  const rentpayments = Array.from({length: 40}).map(
    (unused, i) => i + (i + 1) * Math.random()
  );

  const transfers = Array.from({length: 40}).map(
    (unused, i) => i + (i + 1) * Math.random()
  );

  return (
    <section className="statistics-page__block">
      <h3 className="statistics-page__title">Totals by sections</h3>
      <div className="statistics-page__inner">
        <div className="statistics-page__box">
          <div className="statistics-page__box-flex">
            <h4 className="statistics-page__box-title">
              Current Balances
              <IoInformationCircleOutline className="statistics-page__box-icon" />
            </h4>
            <div>
              <i
                style={{fontSize: '25px', color: '#E5E6E8'}}
                className="icon-wallet1"
              />
            </div>
          </div>
          <div className="statistics-page__box-number-strong">$ 6,560</div>
          <div>
            <span className="statistics-page__box-title-gray">
              Income this month
            </span>
            <span className="statistics-page__box-title-black">{` $1250 `}</span>
            <span className="statistics-page__box-title-green">(+12%)</span>
            <img src={arrow} alt="arrow up" />
          </div>
          <div className="statistics-page__box-info">
            <span>Spent this month</span>
            <span className="statistics-page__box-title-black">{` $565 `}</span>
            <span className="statistics-page__box-title-red">(-5%)</span>
            <img src={arrowRed} alt="arrow down" />
          </div>
          <div className="statistics-page__box-info-total">
            Available balance
            <span className="statistics-page__box-title-black">{` $5905 `}</span>
          </div>
        </div>

        <div className="statistics-page__box">
          <div className="statistics-page__box-flex">
            <h4 className="statistics-page__box-title">
              Global Earnings
              <IoInformationCircleOutline className="statistics-page__box-icon" />
            </h4>
            <div>
              <i
                style={{fontSize: '25px', color: '#E5E6E8'}}
                className="icon-global"
              />
            </div>
          </div>
          <div className="statistics-page__box-number-strong">$ 4,000</div>
          <Sparklines data={sampleData} limit={20} width={100} height={17}>
            <SparklinesLine color="#ff4a7a" />
          </Sparklines>
          <div className="statistics-page__box-info-total">
            <span className="statistics-page__box-title-gray">
              Earned this month
            </span>
            <span className="statistics-page__box-title-black">{` $865.25 `}</span>
            <span className="statistics-page__box-title-green">(+1%)</span>
            <img src={arrow} alt="" />
          </div>
        </div>

        <div className="statistics-page__box">
          <div className="statistics-page__box-flex">
            <h4 className="statistics-page__box-title">
              Referrals
              <IoInformationCircleOutline className="statistics-page__box-icon" />
            </h4>
            <div>
              <i
                style={{fontSize: '25px', color: '#E5E6E8'}}
                className="icon-referrals"
              />
            </div>
          </div>
          <div className="statistics-page__box-number-strong">500</div>
          <Sparklines data={sampleData} limit={12} width={100} height={17}>
            <SparklinesBars style={{fill: '#6889ff', width: '4px'}} />
          </Sparklines>
          <div className="statistics-page__box-info-total">
            <span className="statistics-page__box-title-gray">
              Invaited this month (+5%)
            </span>
            <span className="statistics-page__box-title-black">{` 85 `}</span>
            <span className="statistics-page__box-title-green">(+5%)</span>
            <img src={arrow} alt="" />
          </div>
        </div>

        <div className="statistics-page__box">
          <div className="statistics-page__box-flex">
            <h4 className="statistics-page__box-title">
              Contact Book
              <IoInformationCircleOutline className="statistics-page__box-icon" />
            </h4>
            <div>
              <i
                style={{fontSize: '25px', color: '#E5E6E8'}}
                className="icon-contact"
              />
            </div>
          </div>
          <div className="statistics-page__box-number-strong">
            <span>650</span>
            <span className="statistics-page__box-title-gray">{` / 985`}</span>
          </div>
          <div className="statistics-page__box-space">
            <span className="statistics-page__box-title-black">{`Invaited `}</span>
            <span className="statistics-page__box-title-gray">{` All users`}</span>
          </div>
          <div className="statistics-page__box-info">
            <ProgressBar variant="warning" now={now} label={`${now}%`} />
          </div>
          <div className="statistics-page__box-info-total">
            Conversion rate
            <span className="statistics-page__box-title-black">{` 60%`}</span>
          </div>
        </div>

        <div className="statistics-page__box">
          <div className="statistics-page__box-flex">
            <h4 className="statistics-page__box-title">
              Rewards
              <IoInformationCircleOutline className="statistics-page__box-icon" />
            </h4>
            <div>
              <i
                style={{fontSize: '25px', color: '#E5E6E8'}}
                className="icon-rewards"
              />
            </div>
          </div>
          <div className="statistics-page__box-number-strong">
            16,500 <span style={{fontSize: '15px'}}>DIVITS</span>
            <span className="statistics-page__box-title-gray-rewards">
              {' '}
              ≈ $1250
            </span>
          </div>
          <div>
            <span className="statistics-page__box-title-gray">
              Total time spent
            </span>
            <span className="statistics-page__box-title-black">{` 2535 hours `}</span>
            <img src={arrow} alt="arrow up" />
          </div>
          <div className="statistics-page__box-info">
            <span>This month spent</span>
            <span className="statistics-page__box-title-black">{` 95 hours `}</span>
            <span className="statistics-page__box-title-red">(-1%)</span>
            <img src={arrowRed} alt="arrow down" />
          </div>
          <div className="statistics-page__box-info-total">
            Monthly earned
            <span className="statistics-page__box-title-black">{` 900 Divits `}</span>
            <span className="statistics-page__box-title-green">(+1%)</span>
          </div>
        </div>

        <div className="statistics-page__box">
          <div className="statistics-page__box-flex">
            <h4 className="statistics-page__box-title">
              Cashbacks
              <IoInformationCircleOutline className="statistics-page__box-icon" />
            </h4>
            <div>
              <i
                style={{fontSize: '25px', color: '#E5E6E8'}}
                className="icon-cashbacks"
              />
            </div>
          </div>
          <div className="statistics-page__box-number-strong">$ 2,155</div>
          <Sparklines data={data} limit={20} width={100} height={17}>
            <SparklinesLine color="#c179ea" />
          </Sparklines>
          <div className="statistics-page__box-info-total">
            <span className="statistics-page__box-title-gray">
              Income this month
            </span>
            <span className="statistics-page__box-title-black">{` $375 `}</span>
            <span className="statistics-page__box-title-green">(+7%)</span>
            <img src={arrow} alt="" />
          </div>
        </div>

        <div className="statistics-page__box">
          <div className="statistics-page__box-flex">
            <h4 className="statistics-page__box-title">
              Rentpayments
              <IoInformationCircleOutline className="statistics-page__box-icon" />
            </h4>
            <div>
              <i
                style={{fontSize: '25px', color: '#E5E6E8'}}
                className="icon-rentpay"
              />
            </div>
          </div>
          <div className="statistics-page__box-number-strong">$ 3,856</div>
          <Sparklines data={rentpayments} limit={20} width={100} height={17}>
            <SparklinesLine color="#00b4ff" />
          </Sparklines>
          <div className="statistics-page__box-info-total">
            <span className="statistics-page__box-title-gray">
              Income this month
            </span>
            <span className="statistics-page__box-title-black">{` $575 `}</span>
            <span className="statistics-page__box-title-green">(+19%)</span>
            <img src={arrow} alt="arrow up" />
          </div>
        </div>

        <div className="statistics-page__box">
          <div className="statistics-page__box-flex">
            <h4 className="statistics-page__box-title">
              Global Earnings
              <IoInformationCircleOutline className="statistics-page__box-icon" />
            </h4>
            <div>
              <i
                style={{fontSize: '25px', color: '#E5E6E8'}}
                className="icon-global"
              />
            </div>
          </div>
          <div className="statistics-page__box-number-strong">$ 4,000</div>
          <Sparklines data={transfers} limit={12} width={100} height={17}>
            <SparklinesBars style={{fill: '#b26adb', width: '4px'}} />
          </Sparklines>
          <div className="statistics-page__box-info-total">
            <span className="statistics-page__box-title-gray">
              Earned this month
            </span>
            <span className="statistics-page__box-title-black">{` $865.25 `}</span>
            <span className="statistics-page__box-title-green">(+1%)</span>
            <img src={arrow} alt="arrow up" />
          </div>
        </div>
      </div>
    </section>
  );
};
