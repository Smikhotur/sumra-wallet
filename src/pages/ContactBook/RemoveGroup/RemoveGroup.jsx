import React from 'react';

const RemoveGroup = ({
  removeUser,
  closePopUp,
  nameOfTheDeleted,
  innerBorderRef,
  config,
}) => {
  return (
    <div ref={innerBorderRef} className="ask-about-deletion">
      <h3 className="ask-about-deletion__title">
        {`Are you sure you want to delete ${nameOfTheDeleted} ?`}
      </h3>
      <div className="ask-about-deletion__block-btn">
        <button
          onClick={() => {
            closePopUp();
          }}
          className={`ask-about-deletion__btn-${config?.style}`}
          type="button"
        >
          No
        </button>
        <button
          onClick={() => {
            removeUser();
          }}
          className={`ask-about-deletion__btn-${config?.style}`}
          type="button"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default RemoveGroup;
