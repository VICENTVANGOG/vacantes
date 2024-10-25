
"use client";

import React from 'react';
import InfoCard from '../../molecules/InfoCard/InfoCard';
import styles from './Card.module.scss';
import { companyService } from '@/services/company.services';
import { vacantsService } from '@/services/vacantes.services '; 
import { ICompany } from "@/models/compani.models";
import { IVacants } from "@/models/vacantes.models ";

type CardProps = {
    companies: ICompany[];
    vacants: IVacants[];
    activeTab: 'vacantes' | 'companias';
};

const Card: React.FC<CardProps> = ({ companies, vacants, activeTab }) => {
    const dataToDisplay = activeTab === 'vacantes' ? vacants : companies;

    const handleEdit = (id: string) => {
        console.log(`Edit clicked for ID: ${id}`);
    };

    const handleDelete = async (id: string) => {
        console.log(`Delete clicked for ID: ${id}`);
        const isCompany = companies.some(company => company.id === id);
        if (isCompany) {
            await companyService.destroy(id);
        } else {
            await vacantsService.destroy(id);
        }
    };

    return (
        <div className={styles.cardContainer}>
            {dataToDisplay.map((item) => (
                <InfoCard
                    key={item.id}
                    data={item}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default Card;
