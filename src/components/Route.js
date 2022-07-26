import { useEffect, useState } from 'react';
const Route = ({ path, children }) => {
  //state for making the component re-render when changed path
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  //one time only for the listening event
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);

    //cleanup function
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
