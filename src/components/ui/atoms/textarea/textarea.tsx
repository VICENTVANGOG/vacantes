
import React, { ReactNode } from 'react';
import styles from './style.module.scss';

interface MyTextareaProps {
  children?: ReactNode; 
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const MyTextarea: React.FC<MyTextareaProps> = ({ children, onChange }) => {
  return (
    <textarea className={styles.myTextarea} onChange={onChange}>
      {children}
    </textarea>
  );
};

export default MyTextarea;
