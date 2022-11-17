import React from 'react';
import Books from '../component/Books';
import Bookform from '../component/Bookform';

const Firstbook = () => {
  return (
    <div>
      <Books title="Money Ball" author="Michael Lewis" />
      <Books title="The Alchemist" author="Paulo Coelho" />
      <Books title="The Power of Habit" author="Charles Duhigg" />
      s <Bookform />
    </div>
  );
};

export default Firstbook;
