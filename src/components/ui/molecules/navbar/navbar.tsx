'use client';

import React, { useState } from 'react';
import { Search, Briefcase, Building2 } from 'lucide-react';
import Button from '@/components/ui/atoms/button/button';
import Input from '@/components/ui/atoms/input/input';
import MyHero from '@/components/ui/molecules/hero/hero'; 
import styles from './style.module.scss';

const Navbar: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>('vacantes');

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  const activeButtonColor = selectedButton === 'vacantes' ? '#a855f7' : '#e5e7eb'; 

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftSection}>
          <Button
            variant={selectedButton === 'vacantes' ? 'active' : 'inactive'}
            onClick={() => handleButtonClick('vacantes')}
            className={selectedButton === 'vacantes' ? styles.active : styles.inactive}
          >
            <Briefcase className={styles.buttonIcon} size={16} />
            Vacantes
          </Button>
          <Button
            variant={selectedButton === 'compañias' ? 'active' : 'inactive'}
            onClick={() => handleButtonClick('compañias')}
            className={selectedButton === 'compañias' ? styles.active : styles.inactive}
          >
            <Building2 className={styles.buttonIcon} size={16} />
            Compañías
          </Button>
        </div>
        <div className={styles.buscador}>
          <Input
            type="text"
            placeholder="Buscar..."
            className={styles.transparentInput}
          />
          <Search className={styles.icon} size={16} />
        </div>
      </nav>
      <MyHero selectedButton={selectedButton} activeButtonColor={activeButtonColor} />
    </>
  );
};

export default Navbar;