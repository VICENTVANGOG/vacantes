// AddProductForm.tsx
'use client';
import React, { useState } from 'react';
import Myh1 from '../../atoms/h1/h1';
import Button from '@/components/ui/atoms/button/button';
import FormGroup from '@/components/ui/molecules/FormGroup/FormGroup';
import './AddProductForm.scss';

interface AddProductFormProps {
  activeTab: 'vacantes' | 'companias';
}

const AddProductForm: React.FC<AddProductFormProps> = ({ activeTab }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    companyName: '',
    location: '',
    contact: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
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
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Ingresa el título de la vacante"
            className="add-product-form__group"
          />
          <FormGroup
            id="description"
            label="Descripción"
            type="textarea"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Descripción de la vacante"
            className="add-product-form__group"
          />
          <FormGroup
            id="status"
            label="Estado"
            type="select"
            value={formData.status}
            onChange={handleInputChange}
            options={[
              { value: 'abierta', label: 'Abierta' },
              { value: 'cerrada', label: 'Cerrada' }
            ]}
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
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Ingresa el nombre de la compañía"
            className="add-product-form__group"
          />
          <FormGroup
            id="location"
            label="Ubicación"
            type="text"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Ingresa la ubicación de la compañía"
            className="add-product-form__group"
          />
          <FormGroup
            id="contact"
            label="Contacto"
            type="text"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Ingresa el contacto de la compañía"
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
