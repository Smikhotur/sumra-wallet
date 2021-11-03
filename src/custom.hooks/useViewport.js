/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useContext, useEffect, useState } from 'react';

const ViewportContext = createContext({
  width: window.innerWidth,
});
// eslint-disable-next-line react/prop-types
export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <ViewportContext.Provider value={{ width }}>
      {children}
    </ViewportContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useViewport() {
  return useContext(ViewportContext);
}
