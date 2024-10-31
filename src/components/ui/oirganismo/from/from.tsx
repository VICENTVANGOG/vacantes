'use client';
import React, { useEffect, useState } from 'react';
import Myh1 from '../../atoms/h1/h1';
import Button from '@/components/ui/atoms/button/button';
import FormGroup from '@/components/ui/molecules/FormGroup/FormGroup';
import { CompanyService } from '@/services/company.services';
import { VacantsService } from '@/services/vacantes.services ';
import { IVacants } from '@/models/vacantes.models ';
import './AddProductForm.scss';

type VacancyStatus = 'ACTIVE' | 'INACTIVE';

interface ICompany {
  id: string;
  name: string;
  location: string;
  contact: string;
  vacants: [];
}

interface AddProductFormProps {
  activeTab: 'vacantes' | 'companias';
}

const AddProductForm: React.FC<AddProductFormProps> = ({ activeTab }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '' as VacancyStatus,
    companyId: '',
    companyName: '',
    location: '',
    contact: '',
  });

  const [companies, setCompanies] = useState<ICompany[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://vacantsbackendgates-production.up.railway.app/api/v1/company/all');
        const data = await response.json();
        setCompanies(data); // Ajusta según la estructura de tu respuesta
      } catch (error) {
        console.error('Error al obtener compañías:', error);
      }
    };

    fetchCompanies();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'status' ? (value as VacancyStatus) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (!formData.title || !formData.description || !formData.companyId) {
      console.error('Todos los campos son obligatorios');
      return; // Detenemos la ejecución si hay campos vacíos
    }

    try {
      if (activeTab === 'vacantes') {
        const vacantData: IVacants = {
          title: formData.title,
          description: formData.description,
          status: formData.status,
          companyId: formData.companyId, // Envío del companyId seleccionado
          id: '',
        };

        await VacantsService.post(vacantData);
        console.log('Vacante agregada:', vacantData);
      } else {
        const newCompany: ICompany = {
          id: generateId(),
          name: formData.companyName,
          location: formData.location,
          contact: formData.contact,
          vacants: [],
        };

        await CompanyService.post(newCompany);
        console.log('Compañía agregada:', newCompany);
      }

      // Resetear el formulario
      setFormData({
        title: '',
        description: '',
        status: '' as VacancyStatus,
        companyId: '',
        companyName: '',
        location: '',
        contact: '',
      });
    } catch (error) {
      console.error('Error al agregar:', error);
    }
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9); // Genera un ID único
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {activeTab === 'vacantes' ? (
        <>
          <Myh1 className='titulo'>Agregar Vacante</Myh1>
          <FormGroup
            id="title"
            label="Título"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="add-product-form__group"
          />
          <FormGroup
            id="description"
            label="Descripción"
            type="textarea"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="add-product-form__group"
          />
          <FormGroup
            id="status"
            label="Estado"
            type="select"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            options={[
              { value: 'ACTIVE', label: 'Abierta' },
              { value: 'INACTIVE', label: 'Cerrada' },
            ]}
            className="add-product-form__group"
          />
          <FormGroup
            id="companyId"
            label="Compañía"
            type="select"
            name="companyId"
            value={formData.companyId}
            onChange={handleInputChange}
            options={companies.map(company => ({
              value: company.id,
              label: company.name,
            }))}
            className="add-product-form__group"
          />
        </>
      ) : (
        <>
          <Myh1 className='titulo'>Agregar Compañía</Myh1>
          <FormGroup
            id="companyName"
            label="Nombre"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="add-product-form__group"
          />
          <FormGroup
            id="location"
            label="Ubicación"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="add-product-form__group"
          />
          <FormGroup
            id="contact"
            label="Contacto"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="add-product-form__group"
          />
        </>
      )}
      <div className="add-product-form__actions">
        <Button type="submit" className="add-product-form__submit-button">
          {activeTab === 'vacantes' ? 'Agregar Vacante' : 'Agregar Compañía'}
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;
