import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  BrowserRouter as Router,
} from 'react-router-dom';
import CursorSpinner from './CursorSpinner/CursorSpinner.jsx';
import SidebarContactBook from './SidebarContactBook/SidebarContactBook.jsx';
import AllContacts from './AllContacts/AllContacts.jsx';
import { MyFavourites } from './MyFavourites/MyFavourites.jsx';
import { RecentlyAdded } from './RecentlyAdded/RecentlyAdded.jsx';
import { ReferredContactBook } from './ReferredContactBook/ReferredContactBook.jsx';
import { ContactCash } from './ContactCash/ContactCash.jsx';
import { CreateContact } from './CreateContact/CreateContact.jsx';
import { ListGroups } from './ListGroups/ListGroups.jsx';
import { ImportContactsModal } from './ImportContactsModal/ImportContactsModal.jsx';
import { ExportContactsModal } from './ExportContactsModal/ExportContactsModal.jsx';
import useOnOutsideClick from '../../custom.hooks/useOnOutsideClick';
import { MessageFromServer } from './MessageFromServer/MessageFromServer.jsx';
import actions from '../../store/contactBook/actions';
import RemoveGroup from './RemoveGroup/RemoveGroup.jsx';
import '../../assets/scss/contactBook/index.scss';
import AddNewGroup from './AddNewGroup/AddNewGroup.jsx';

export const RouterInner = ({ config }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  let pathname = window.location.pathname;

  const groups = useSelector((state) => state.reducerContactBook.groups);
  const preloader = useSelector((state) => state.reducerContactBook.preloader);
  const message = useSelector(
    (state) => state.reducerContactBook.messageFromServer
  );
  const remove = useSelector((state) => state.reducerContactBook.remove);
  const idUser = useSelector((state) => state.reducerContactBook.idUser);
  const nameOfTheDeleted = useSelector(
    (state) => state.reducerContactBook.nameOfTheDeleted
  );
  const removeContacts = useSelector(
    (state) => state.reducerContactBook.removeContacts
  );
  const people = useSelector((state) => state.reducerContactBook.users);
  const { innerBorderRef } = useOnOutsideClick(() =>
    dispatch(actions.removeGroupContact(false))
  );

  const removeUser = () => {
    console.log(nameOfTheDeleted);

    if (nameOfTheDeleted.includes('the group')) {
      dispatch(actions.runPreloader(true));
      dispatch(actions.removeGroup(idUser));
      dispatch(actions.getGroups());
      dispatch(actions.removeGroupContact(false));
      return;
    }

    if (nameOfTheDeleted.includes('contacts')) {
      console.log('hi');
      dispatch(actions.runPreloader(true));
      dispatch(actions.removeUsers(removeContacts));
      dispatch(actions.removeGroupContact(false));
      dispatch(
        actions.getAllUsers(
          people.filter((man) => !removeContacts.includes(man.id))
        )
      );
      dispatch(actions.getIdPerson([]));
      return;
    }

    if (nameOfTheDeleted.includes('contact')) {
      console.log('hello');
      dispatch(actions.runPreloader(true));
      dispatch(actions.removeUser(idUser));
      dispatch(actions.removeGroupContact(false));
      dispatch(actions.getAllUsers(people.filter((man) => man.id !== idUser)));
      dispatch(actions.getIdPerson([]));
    }

    if (pathname.includes('person')) {
      dispatch(actions.getUsers(`/contacts`));
      history.push(pathname.slice(0, -7));
    }
  };

  const closePopUp = () => {
    dispatch(actions.removeGroupContact(true));
    dispatch(actions.removeGroupContact(false));
  };

  return (
    <div className="contact-book">
      {preloader && <CursorSpinner />}
      {message && <MessageFromServer />}
      <SidebarContactBook config={config} />
      <Switch>
        <Route path={`/contact-book/all-contacts`}>
          <AllContacts config={config} />
        </Route>
        <Route path={`/contact-book/my-favourites`}>
          <MyFavourites config={config} />
        </Route>
        <Route path={`/contact-book/recently-added`}>
          <RecentlyAdded config={config} />
        </Route>
        <Route path={`/contact-book/referred-contact-book`}>
          <ReferredContactBook config={config} />
        </Route>
        <Route path={`/contact-book/add-contact`}>
          <CreateContact config={config} />
        </Route>
        <Route path={`/contact-book/contact-cash`}>
          <ContactCash config={config} />
        </Route>
        {groups.map((router) => (
          <Route
            key={router.id}
            path={`/contact-book/${router.name.replace(/\s+/g, '-')}`}
          >
            <ListGroups
              config={config}
              pathName={`/contact-book/${router.name.replace(/\s+/g, '-')}`}
            />
          </Route>
        ))}
        <Redirect from="/" to={`/contact-book/all-contacts`} />
      </Switch>
      <Route
        path="/"
        render={(routerProps) => (
          <ImportContactsModal {...routerProps} config={config} />
        )}
      />
      <Route
        path="/"
        render={(routerProps) => (
          <ExportContactsModal {...routerProps} config={config} />
        )}
      />
      <AddNewGroup config={config} />

      <section className={!remove ? 'ask-wrapper' : 'ask-wrapper-visible'}>
        <RemoveGroup
          removeUser={removeUser}
          closePopUp={closePopUp}
          nameOfTheDeleted={nameOfTheDeleted}
          innerBorderRef={innerBorderRef}
          config={config}
        />
      </section>
    </div>
  );
};
