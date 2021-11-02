import React from 'react';
import useMousePosition from '../../../custom.hooks/useMousePosition';
import { Spinner } from 'reactstrap';

const CursorSpinner = () => {
  const { clientX, clientY } = useMousePosition();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999999999999,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: clientX,
          top: clientY,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Spinner color="warning" />
      </div>
    </div>
  );
};

export default CursorSpinner;
