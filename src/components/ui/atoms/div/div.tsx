import React, { ReactNode } from 'react';
import styles from './InfoCard.module.scss';

interface InfoCardProps {
    children: ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ children }) => {
    return <div className={styles.infoCard}>{children}</div>;
};

export default InfoCard;