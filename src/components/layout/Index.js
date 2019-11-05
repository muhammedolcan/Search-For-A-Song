import React from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';

const Navbar = () => {
  return (
      <React.Fragment>
        <Search />
          <Tracks />
      </React.Fragment>
    
  );
};

export default Navbar;