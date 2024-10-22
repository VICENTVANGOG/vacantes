
import React, { ReactNode } from 'react';
import styles from './style.module.scss'; 

interface MyH3Props {
  children: ReactNode;
}

const MyH3: React.FC<MyH3Props> = ({ children }) => {
  return (
    <h3 className={styles.myH3}>
      {children}
    </h3>
  );
};

export default MyH3;
