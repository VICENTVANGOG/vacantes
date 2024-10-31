import React, { useEffect, useState } from 'react';
import { CompanyService } from '@/services/company.services';
import { VacantsService } from '@/services/vacantes.services ';
import InfoCard from '../../molecules/InfoCard/InfoCard';
import styles from './Card.module.scss';
import { ICompany } from "@/models/compani.models";
import { IVacants } from "@/models/vacantes.models ";
import AddProductForm from '@/components/ui/oirganismo/from/from'; // Asegúrate de que la ruta sea correcta

type CardProps = {
    activeTab: 'vacantes' | 'companias';
};

const Card: React.FC<CardProps> = ({ activeTab }) => {
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [vacants, setVacants] = useState<IVacants[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState<ICompany | IVacants | undefined>(undefined);

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

    const handleEdit = (id: string) => {
        const itemToEdit = activeTab === 'vacantes' 
            ? vacants.find(vacant => vacant.id === id) 
            : companies.find(company => company.id === id);
        
        if (itemToEdit) {
            setEditData(itemToEdit);
            setIsEditing(true);
        }
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

    const handleCloseForm = () => {
        setIsEditing(false);
        setEditData(undefined); // Cambia null a undefined
        loadData(); // Recarga después de cerrar el formulario
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
            {isEditing && editData && (
                <AddProductForm 
                    activeTab={activeTab}
                    onClose={handleCloseForm}
                    editData={editData} // Asegúrate de que editData sea del tipo correcto
                />
            )}
        </div>
    );
};

export default Card;
