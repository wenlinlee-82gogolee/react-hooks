import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = e => {
    //mac || window =>command clicks
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    //prevent full reload (default browser behavior)
    e.preventDefault();
    //built in function of browser to change url
    window.history.pushState({}, '', href);

    //communicate with components that the url has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
