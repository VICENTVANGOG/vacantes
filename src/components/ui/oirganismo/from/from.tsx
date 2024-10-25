'use client';
import React, { useState } from 'react';
import Myh1 from '../../atoms/h1/h1';
import Button from '@/components/ui/atoms/button/button';
import FormGroup from '@/components/ui/molecules/FormGroup/FormGroup';
import { companyService } from '@/services/company.services'; // Importa el servicio de compañías
import { vacantsService } from '@/services/vacantes.services '; // Importa el servicio de vacantes
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
    contact: '',
    compani: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (activeTab === 'vacantes') {
        // Enviar datos de la vacante
        await vacantsService.post({
          title: formData.title,
          description: formData.description,
          status: formData.status,
          company: formData.compani // Asegúrate de que esto coincida con tu modelo
        });
        console.log('Vacante agregada:', formData);
      } else {
        // Enviar datos de la compañía
        const newCompany = {
          id: generateId(), // Genera un ID temporal (puedes implementar una lógica diferente si lo prefieres)
          name: formData.companyName,
          location: formData.location,
          contact: formData.contact,
          vacants: [] // Inicializa vacants como un arreglo vacío
        };

        await companyService.post(newCompany);
        console.log('Compañía agregada:', formData);
      }

      // Resetear el formulario después de enviar
      setFormData({
        title: '',
        description: '',
        status: '',
        companyName: '',
        location: '',
        contact: '',
        compani: ''
      });

    } catch (error) {
      console.error('Error al agregar:', error);
    }
  };

  // Función para generar un ID temporal (puedes usar otra lógica)
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9); // Genera un ID aleatorio
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
              { value: 'abierta', label: 'Abierta' },
              { value: 'cerrada', label: 'Cerrada' }
            ]}
            className="add-product-form__group"
          />
          <FormGroup
            id="compani"
            label="Compañía"
            type="text"
            name="compani"
            value={formData.compani}
            onChange={handleInputChange}
  
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
