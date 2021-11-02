import React, {useEffect, useState} from 'react';
import Close from '../../assets/images/close.png';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../store/contactBook/actions';
import useOnOutsideClick from '../../custom.hooks/useOnOutsideClick';

const AddNewGroup = ({config}) => {
  const [visible, setVisible] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [sms, setSms] = useState(false)
  const dispatch = useDispatch();
  const groups = useSelector(
    (state) => state.reducerContactBook.groups
  );
  const modalVisible = useSelector(
    (state) => state.reducerContactBook.modal
  );
  const {innerBorderRef} = useOnOutsideClick(() => dispatch(actions.changeModal(false)));

  useEffect(() => {
    dispatch(actions.getGroups());
  }, []);

  const createGroup = ({target: {value}}) => {
    setTextInput(value);
  };

  const sendGroup = (e) => {
    e.preventDefault();

    if (textInput.trim().length <= 2) {
      setSms(true);
      setTimeout(() => {
        setSms(false);
      }, 2000)
      return;
    }
    dispatch(actions.runPreloader(true));
    dispatch(actions.postGroups(textInput));
    setTextInput('');
    dispatch(actions.changeModal(!modalVisible));
  };
  return (
    <section
      className={
        modalVisible
          ? 'contact-book__add-group-modal add-group-modal-visible'
          : 'contact-book__add-group-modal add-group-modal'
      }
    >
      <form
        ref={innerBorderRef}
        onSubmit={sendGroup}
        action=""
        className="add-group-modal__inner"
      >
        <div className="add-group-modal__block-header">
          <h2 className="add-group-modal__title">Add new group</h2>
          <img
            className="add-group-modal__img-close"
            src={Close}
            alt="Close modal"
            onClick={() => {
              dispatch(actions.changeModal(false));
            }}
          />
        </div>

        <div
          className={
            visible
              ? `add-group-modal__block-input-visible-${config?.style}`
              : textInput
              ? `add-group-modal__block-input-visible-${config?.style}`
              : 'add-group-modal__block-input'
          }
        >
          <input
            required
            value={textInput}
            onChange={createGroup}
            onFocus={() => {
              setVisible(true);
            }}
            onBlur={() => {
              setVisible(false);
            }}
            className="add-group-modal__input"
            type="text"
          />
         {sms &&
            <div className="add-group-modal__sms">
              Characters must be at least three
            </div>}
        </div>

        <div className="add-group-modal__block-btn">
          <button
            onClick={() => {
              dispatch(actions.changeModal(false));
            }}
            type="button"
            className={`add-group-modal__btn-${config?.style}`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`add-group-modal__btn-${config?.style}`}
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddNewGroup;