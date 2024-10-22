import React from 'react';
import Myh1 from '@/components/ui/atoms/h1/h1'; 
import Button from '@/components/ui/atoms/button/button'; 
import styles from './style.module.scss'; 

interface MyHeroProps {
  selectedButton: string | null;
  activeButtonColor: string; 
}

const MyHero: React.FC<MyHeroProps> = ({ selectedButton, activeButtonColor }) => {
  return (
    <header className={styles.hero}>
      <Myh1>{selectedButton === 'vacantes' ? 'Vacantes' : 'Compañías'}</Myh1>
      <div className={styles.actionButtons}>
        <Button variant="agregar" style={{ backgroundColor: activeButtonColor }}>
          {selectedButton === 'vacantes' ? 'Agregar Vacante' : 'Agregar Compañía'}
        </Button>
      </div>
    </header>
  );
};

export default MyHero;