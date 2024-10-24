
import React from 'react';
import InfoCard from '../../molecules/InfoCard/InfoCard';
import styles from './Card.module.scss';

const companies = [
  { companyName: "TechCorp", location: "Ciudad de México", contact: "555-0101" },
  { companyName: "InnoSoft", location: "Buenos Aires", contact: "555-0202" },
  { companyName: "DevSolutions", location: "Bogotá", contact: "555-0303" },
  { companyName: "WebInnovate", location: "Lima", contact: "555-0404" },
  { companyName: "AppCreators", location: "Santiago", contact: "555-0505" }
];

const vacancies = [
  { jobTitle: "Desarrollador Frontend", companyName: "TechCorp", location: "Ciudad de México" },
  { jobTitle: "Ingeniero de Software", companyName: "InnoSoft", location: "Buenos Aires" },
  { jobTitle: "Analista de Datos", companyName: "DevSolutions", location: "Bogotá" },
  { jobTitle: "Diseñador UX/UI", companyName: "WebInnovate", location: "Lima" },
  { jobTitle: "Desarrollador Backend", companyName: "AppCreators", location: "Santiago" }
];

type Company = { companyName: string; location: string; contact: string; };
type Vacancy = { jobTitle: string; companyName: string; location: string; };
type CardProps = { activeTab: 'vacantes' | 'companias'; };

const Card: React.FC<CardProps> = ({ activeTab }) => {
  const dataToDisplay = activeTab === 'vacantes' ? vacancies : companies;

  const handleEdit = () => {
    console.log('Edit clicked');
  };

  const handleDelete = () => {
    console.log('Delete clicked');
  };

  return (
    <div className={styles.cardContainer}>
      {dataToDisplay.map((item, index) => (
        <InfoCard
          key={index}
          title={activeTab === 'vacantes' ? (item as Vacancy).jobTitle : (item as Company).companyName}
          subtitle1={activeTab === 'vacantes' ? (item as Vacancy).companyName : (item as Company).location}
          subtitle2={activeTab === 'vacantes' ? (item as Vacancy).location : `Contacto: ${(item as Company).contact}`}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Card;
