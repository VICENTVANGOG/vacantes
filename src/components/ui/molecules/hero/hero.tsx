import React from 'react';
import Myh1 from '@/components/ui/atoms/h1/h1';
import Button from '@/components/ui/atoms/button/button';
import styles from './HeroSection.module.scss';
import { Plus } from "lucide-react";

interface HeroSectionProps {
  activeTab: 'vacantes' | 'companias';
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeTab }) => {
  const getActiveButtonColor = () => {
    return activeTab === 'vacantes' ? '#A855F7' : '#EC4899';
  };

  return (
    <header className={styles.hero}>
      <div className={styles.letra}>
        <Myh1 >{activeTab === 'vacantes' ? 'Vacantes' : 'Compañías'}</Myh1>
      </div>
      
      <div className={styles.actionButtons}>
        <Button 
          variant="agregar" 
          style={{ backgroundColor: getActiveButtonColor() }}
        >
          <Plus size={16} /> {/* Icono de más */}
          {activeTab === 'vacantes' ? 'Agregar Vacante' : 'Agregar Compañía'}
        </Button>
      </div>
    </header>
  );
};

export default HeroSection;
