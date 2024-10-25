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
        // Aquí puedes agregar la lógica para editar
    };

    const handleDelete = async (id: string) => {
        console.log(`Delete clicked for ID: ${id}`);
        const isCompany = companies.some(company => company.id === id);
        if (isCompany) {
            await companyService.destroy(id);
            // Aquí puedes agregar lógica para actualizar el estado si es necesario
        } else {
            await vacantsService.destroy(id);
            // Aquí puedes agregar lógica para actualizar el estado si es necesario
        }
    };

    return (
        <div className={styles.cardContainer}>
            {dataToDisplay.map((item) => (
                <InfoCard
                    key={item.id} // Asegúrate de que cada item tenga un id único
                    data={item} // Pasa todo el objeto a InfoCard
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

// Función para obtener datos del servidor
export async function getServerSideProps() {
    try {
        const companies = await companyService.findAll();
        const vacants = await vacantsService.findAll();
        return {
            props: {
                companies,
                vacants,
                activeTab: "companias", // O el valor que desees por defecto
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                companies: [],
                vacants: [],
                activeTab: "companias", // Valor por defecto
            },
        };
    }
}

export default Card;
