import React from 'react';

export const withAuthMain: React.FC<{}> = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <>
        <header className="sumra-header">
          <div className="logotype"></div>
        </header>
        <main className="sumra-main">
          <Component {...props} className={'authentification-form'} />
        </main>
      </>
    );
  };
};
