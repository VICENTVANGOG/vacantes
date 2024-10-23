import React, { useState } from 'react';
import Myh1 from '@/components/ui/atoms/h1/h1';
import Button from '@/components/ui/atoms/button/button';
import Modal from '@/components/ui/atoms/modal/modal'; 
import AddProductForm from '@/components/ui/molecules/from/from'; 
import styles from './HeroSection.module.scss';
import { CirclePlus } from "lucide-react";

interface HeroSectionProps {
  activeTab: 'vacantes' | 'companias';
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeTab }) => {
  const [showForm, setShowForm] = useState(false);

  const getActiveButtonColor = () => {
    return activeTab === 'vacantes' ? '#A855F7' : '#EC4899';
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false); 
  };

  return (
    <header className={styles.hero}>
      <div className={styles.letra}>
        <Myh1>{activeTab === 'vacantes' ? 'Vacantes' : 'Compañías'}</Myh1>
      </div>
      
      <div className={styles.actionButtons}>
        <Button 
          variant="agregar" 
          style={{ backgroundColor: getActiveButtonColor() }}
          onClick={handleButtonClick} 
        >
          <CirclePlus size={16} />
          {activeTab === 'vacantes' ? 'Agregar Vacante' : 'Agregar Compañía'}
        </Button>
      </div>

   
      <Modal isOpen={showForm} onClose={closeModal}>
        <AddProductForm activeTab={activeTab} />
      </Modal>
    </header>
  );
};

export default HeroSection;
