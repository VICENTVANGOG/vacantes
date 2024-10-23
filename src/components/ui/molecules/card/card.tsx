import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'; 
import { MdModeEdit } from "react-icons/md";
import InfoCard from '../../atoms/div/div'; 
import Myh1 from '../../atoms/h1/h1'; 
import MyH3 from '../../atoms/h3/h3'; 
import Button from '../../atoms/button/button'; 
import styles from './Card.module.scss'; 

const companies = [
  {
    companyName: "TechCorp",
    location: "Ciudad de México",
    contact: "555-0101"
  },
  {
    companyName: "InnoSoft",
    location: "Buenos Aires",
    contact: "555-0202"
  },
  {
    companyName: "DevSolutions",
    location: "Bogotá",
    contact: "555-0303"
  },
  {
    companyName: "WebInnovate",
    location: "Lima",
    contact: "555-0404"
  },
  {
    companyName: "AppCreators",
    location: "Santiago",
    contact: "555-0505"
  }
];

const vacancies = [
  {
    jobTitle: "Desarrollador Frontend",
    companyName: "TechCorp",
    location: "Ciudad de México"
  },
  {
    jobTitle: "Ingeniero de Software",
    companyName: "InnoSoft",
    location: "Buenos Aires"
  },
  {
    jobTitle: "Analista de Datos",
    companyName: "DevSolutions",
    location: "Bogotá"
  },
  {
    jobTitle: "Diseñador UX/UI",
    companyName: "WebInnovate",
    location: "Lima"
  },
  {
    jobTitle: "Desarrollador Backend",
    companyName: "AppCreators",
    location: "Santiago"
  }
];

type Company = {
  companyName: string;
  location: string;
  contact: string;
};

type Vacancy = {
  jobTitle: string;
  companyName: string;
  location: string;
};

type CardProps = {
  activeTab: 'vacantes' | 'companias';
};

const Card: React.FC<CardProps> = ({ activeTab }) => {
  const dataToDisplay = activeTab === 'vacantes' ? vacancies : companies;

  return (
    <div className={styles.cardContainer}>
      {dataToDisplay.map((item, index) => (
        <InfoCard key={index} className={styles.container}>
          <div className={styles.text}>
            {activeTab === 'vacantes' ? (
              <>
                <Myh1 className={styles.title}>{(item as Vacancy).jobTitle}</Myh1>
                <MyH3 className={styles.subtitle}>{(item as Vacancy).companyName}</MyH3>
                <MyH3 className={styles.subtitle}>{(item as Vacancy).location}</MyH3>
              </>
            ) : (
              <>
                <Myh1 className={styles.title}>{(item as Company).companyName}</Myh1>
                <MyH3 className={styles.subtitle}>{(item as Company).location}</MyH3>
                <MyH3 className={styles.subtitle}>Contacto: {(item as Company).contact}</MyH3>
              </>
            )}
          </div>

          <div className={styles.actions}>
            <Button className={styles.editButton}>
              <MdModeEdit  size={20} color="#6c63ff" /> 
            </Button>
            <Button className={styles.deleteButton}>
              <FaTrashAlt size={20} color="#ff4d4d" /> 
            </Button>
          </div>
        </InfoCard>
      ))}
    </div>
  );
};

export default Card;
