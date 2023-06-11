import React from 'react';

// when the component receives true for the 'clicked' prop, add "(DEAD)" to the end of the name after 3 seconds.

export default ({ name, clicked, ...restProps }) => {
  return <div className={clicked ? 'clicked' : ''} {...restProps}>{name}</div>;
}
  
