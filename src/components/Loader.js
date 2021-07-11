import React from 'react';
import './Loader.scss';

export const Loader = () => {
  return (
    <div className="loader">
      <div id="loader-content">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>

  )
}

export default Loader;
