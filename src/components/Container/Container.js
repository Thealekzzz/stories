import React from 'react';

import styles from "./Container.module.css";

const Container = ({ children, style }) => {
  return (
    <div 
      className={styles['container']}
      style={{
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Container;