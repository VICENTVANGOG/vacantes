
import React, { ReactNode } from 'react';
import styles from './style.module.scss';

interface MySelectProps {
  children: ReactNode;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const MySelect: React.FC<MySelectProps> = ({ children, onChange }) => {
  return (
    <select className={styles.mySelect} onChange={onChange}>
      {children}
    </select>
  );
};

export default MySelect;
