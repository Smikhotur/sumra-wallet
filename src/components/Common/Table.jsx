import React, { useState, useMemo, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { imagesList } from '../../pages/Transactions/imagesList';
import cn from 'classnames';
import { set } from 'lodash';

const Table = ({ data, tabId, statusChoosen, searchItem, dateRange }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [checked, setChecked] = useState(false);
  const [countCheck, setCountCheck] = useState(0);

  const regPhrase = new RegExp(searchItem, 'i');
  const requestSort = (field) => {
    let direction = 'ascending';

    if (sortConfig !== null && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ field, direction });
  };

  switch (tabId) {
    case 'incomes':
      const resultIncome = data.rows.filter(
        (el) =>
          el.description.includes('Buy') || el.description.includes('Receiv')
      );
      data.rows = resultIncome;
      break;
    case 'expenses':
      const resultExpense = data.rows.filter(
        (el) =>
          el.description.includes('Sell') || el.description.includes('Sent')
      );
      data.rows = resultExpense;
      break;
    case 'all':
      data.rows;

      break;
    default:
      data.rows;
  }

  switch (statusChoosen) {
    case 'Overdue':
      const resultOverdue = data.rows.filter(
        (el) => el.status === statusChoosen
      );
      data.rows = resultOverdue;
    case 'Pending':
      const resultPending = data.rows.filter(
        (el) => el.status === statusChoosen
      );
      data.rows = resultPending;
    case 'Complete':
      const resultComplete = data.rows.filter(
        (el) => el.status === statusChoosen
      );
      data.rows = resultComplete;
    case 'Any status':
      data.rows;
    default:
      data.rows;
  }

  if (dateRange !== null) {
    const resultDateRange = data.rows.filter(
      (el) =>
        new Date(el.date) >= dateRange[0].startDate &&
        new Date(el.date) <= dateRange[0].endDate
    );

    data.rows = resultDateRange;
  }

  useMemo(() => {
    if (sortConfig !== null) {
      if (sortConfig.field === 'date') {
        data.rows.sort((a, b) => {
          if (
            a[Date.parse(sortConfig.field)] < b[Date.parse(sortConfig.field)]
          ) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (
            a[Date.parse(sortConfig.field)] > b[Date.parse(sortConfig.field)]
          ) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }

      data.rows.sort((a, b) => {
        if (a[sortConfig.field] < b[sortConfig.field]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.field] > b[sortConfig.field]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return data.rows;
  }, [data.rows, sortConfig]);

  const handleToggleCheck = () => {
    setChecked(!checked);
  };
  useEffect(() => {
    toggleCheck();
  }, [checked]);
  const toggleCheck = () => {
    let checkboxes = document.getElementsByName('rowCheckBox');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = checked;
    }
  };

  const handleClickInput = (e) => {
    const target = e.target;

    alert(target.parentElement.parentElement);
  };
  return (
    <>
      <table className="table dataTable">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="headerCheckBox"
                onClick={handleToggleCheck}
              />
            </th>

            {data.columns.map((item) => (
              <th
                scope="col"
                key={uuidv4()}
                onClick={() => requestSort(item.field)}
                className="sorting"
              >
                <span className="table-th-txt">{item.label}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row) => {
            if (regPhrase.test(Object.values(row)) || regPhrase.test('Search'))
              return (
                <tr key={uuidv4()}>
                  <td>
                    <input
                      type="checkbox"
                      name="rowCheckBox"
                      onClick={handleClickInput}
                    />
                  </td>

                  {data.columns.map((col) => {
                    if (col.field == 'amount') {
                      let direction = ['Buy', 'Sell', 'Receiv', 'Sent'].find(
                        (el) => row.description.includes(el)
                      );

                      let image = imagesList.find(
                        (el) => el.title == direction
                      );
                      if (image) {
                        return (
                          <td key={uuidv4()}>
                            <img
                              src={image.img}
                              alt="receive"
                              className="table-td-img"
                            />
                            <span
                              className="table-txt"
                              style={{ display: 'inline-block' }}
                            >
                              {row[col.field]}
                            </span>
                          </td>
                        );
                      }
                    }

                    let image = imagesList.find(
                      (el) => el.title == row[col.field]
                    );
                    if (image) {
                      return (
                        <td key={uuidv4()}>
                          <img
                            src={image.img}
                            alt="receive"
                            className="table-td-img"
                          />
                          <span
                            className="table-txt"
                            style={{ display: 'inline-block' }}
                          >
                            {row[col.field]}
                          </span>
                        </td>
                      );
                    }
                    return (
                      <td key={uuidv4()}>
                        <span
                          className={cn(
                            'table-dot',
                            `${row.status}`.toLowerCase()
                          )}
                        ></span>
                        <span className="table-txt">{row[col.field]}</span>
                      </td>
                    );
                  })}
                </tr>
              );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
