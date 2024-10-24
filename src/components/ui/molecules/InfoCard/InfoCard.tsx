
import React from 'react';
import Myh1 from '../../atoms/h1/h1';
import MyH3 from '../../atoms/h3/h3';
import CardActions from '../../molecules/CardActions/CardActions';
import styles from './InfoCard.module.scss';

interface InfoCardProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
  additionalInfo?: string;
  onEdit: () => void;
  onDelete: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitle1, subtitle2, additionalInfo, onEdit, onDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Myh1 className={styles.title}>{title}</Myh1>
        <MyH3 className={styles.subtitle}>{subtitle1}</MyH3>
        <MyH3 className={styles.subtitle}>{subtitle2}</MyH3>
        {additionalInfo && <MyH3 className={styles.subtitle}>{additionalInfo}</MyH3>}
      </div>
      <CardActions onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default InfoCard;
