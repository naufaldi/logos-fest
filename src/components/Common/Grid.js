import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ className, children }) => {
  return (
    <div
      className={clsx('grid gap-6 grid-cols-12 w-full md:gap-10', className)}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Grid;
