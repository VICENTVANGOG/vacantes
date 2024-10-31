import React, { useEffect, useState } from 'react';
import { CompanyService } from '@/services/company.services';
import { VacantsService } from '@/services/vacantes.services ';
import InfoCard from '../../molecules/InfoCard/InfoCard';
import styles from './Card.module.scss';
import { ICompany } from "@/models/compani.models";
import { IVacants } from "@/models/vacantes.models ";

type CardProps = {
    activeTab: 'vacantes' | 'companias';
};

const Card: React.FC<CardProps> = ({ activeTab }) => {
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [vacants, setVacants] = useState<IVacants[]>([]);

    const loadData = async () => {
        try {
            const [companiesData, vacantsData] = await Promise.all([
                CompanyService.findAll(),
                VacantsService.findAll(),
            ]);
            setCompanies(companiesData);
            setVacants(vacantsData);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    };

    useEffect(() => {
        loadData(); // Carga inicial de compañías y vacantes
    }, []);

    const handleEdit = async (id: string) => {
        console.log(`Edit clicked for ID: ${id}`);
       
        await loadData(); // Recarga después de editar
    };

    const handleDelete = async (id: string) => {
        console.log(`Delete clicked for ID: ${id}`);
        const isCompany = companies.some(company => company.id === id);
        if (isCompany) {
            await CompanyService.destroy(id);
        } else {
            await VacantsService.destroy(id);
        }
        await loadData(); // Recarga después de eliminar
    };

    const dataToDisplay = activeTab === 'vacantes' ? vacants : companies;

    return (
        <div className={styles.cardContainer}>
            {dataToDisplay.map((item) => (
                <InfoCard
                    key={item.id}
                    data={item}
                    onEdit={() => handleEdit(item.id)}
                    onDelete={() => handleDelete(item.id)}
                />
            ))}
        </div>
    );
};

export default Card;
