import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../store/contactBook/actions';

export const MessageFromServer = () => {
  const massage = useSelector(
    (state) => state.reducerContactBook.messageFromServer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.getMassage(''));
    }, 4000);
  }, []);

  return (
    <section className="message-inner">
      <div className="message">
        <h2 className="message__title">{massage}</h2>
      </div>
    </section>
  );
};
