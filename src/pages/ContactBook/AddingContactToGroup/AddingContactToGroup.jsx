import React, { useState } from 'react';

export const AddingContactToGroup = ({
  addIdGroups,
  addedGroup,
  sendGroups,
  groups,
  nameClass,
  coordinates,
  showGroups,
  innerBorderRef,
  config,
}) => {
  const [delIdGroups, setDelIdGroups] = useState([]);
  const removeGroups = ({ target: { checked } }, id) => {
    if (checked === false) {
      setDelIdGroups((prev) => [...prev, id]);
    }
  };

  return (
    <div
      ref={innerBorderRef}
      style={
        showGroups
          ? {
              position: 'absolute',
              left: `${+coordinates.x - 252}px`,
              top: `${+coordinates.y + 15}px`,
              zIndex: '10',
            }
          : {}
      }
      className={nameClass}
    >
      <h4 className="contact-edit__grups-title">Groups management</h4>
      <div className="contact-edit__list-scroll">
        <ul className="contact-edit__list-inner">
          {groups.map((group) => (
            <li key={group.id} className="contact-edit__item-group">
              <div className="contact-edit__group-inner">
                <i style={{ color: '#757575' }} className="icon-addGroup"></i>
                {group.name.length > 19
                  ? group.name[0].toUpperCase() +
                    group.name.slice(1, 19) +
                    '...'
                  : group.name[0].toUpperCase() + group.name.slice(1)}
              </div>

              <label htmlFor="group-checkbox"></label>
              <input
                checked={addedGroup.includes(group.id) ? true : false}
                onChange={(e) => {
                  addIdGroups(e, group.id);
                  removeGroups(e, group.id);
                }}
                id="group-checkbox"
                type="checkbox"
              />
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => {
          sendGroups();
          // setHuman([]);
        }}
        className={`contact-edit__group-btn-inner-${config?.style}`}
      >
        Apply
      </div>
    </div>
  );
};
