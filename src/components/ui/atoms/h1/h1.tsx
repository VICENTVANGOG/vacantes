
import React, { ReactNode } from 'react';
import styles from './style.module.scss'; 

interface MyComponentProps {
  children: ReactNode; 
}

const Myh1: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className={styles.myComponent}> 
      {children}
    </div>
  );
};

export default Myh1;
