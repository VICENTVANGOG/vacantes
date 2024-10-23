import React, { useState } from 'react';
import Input from '@/components/ui/atoms/input/input';
import Button from '@/components/ui/atoms/button/button';
import Label from '@/components/ui/atoms/label/label';
import Textarea from '@/components/ui/atoms/textarea/textarea';
import Select from '@/components/ui/atoms/select/select';
import './AddProductForm.scss';
import Myh1 from '../../atoms/h1/h1';

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
          <div className="add-product-form__group">
          <Myh1 className='titulo'>agregar Vacante</Myh1>

            <Label htmlFor="title">Título</Label>
            <Input 
              id="title" 
              name="title" 
              type="text" 
              placeholder="Ingresa el título de la vacante"
              value={formData.title}
              onChange={handleInputChange}
              className="add-product-form__input"
            />
          </div>

          <div className="add-product-form__group">
            <Label htmlFor="description">Descripción</Label>
            <Textarea 
              id="description" 
              name="description" 
              placeholder="Descripción de la vacante"
              value={formData.description}
              onChange={handleInputChange}
              className="add-product-form__textarea"
            />
          </div>

          <div className="add-product-form__group">
            <Label htmlFor="status">Estado</Label>
            <Select 
              id="status" 
              name="status" 
              value={formData.status}
              onChange={handleInputChange}
              className="add-product-form__select"
            >
              <option value="abierta">Abierta</option>
              <option value="cerrada">Cerrada</option>
            </Select>
          </div>
        </>
      ) : (
        <>
          <div className="add-product-form__group">
            <Myh1 className='titulo'>agregar compañia</Myh1>
            <Label htmlFor="companyName">Nombre</Label>
            <Input 
              id="companyName" 
              name="companyName" 
              type="text" 
              placeholder="Ingresa el nombre de la compañía"
              value={formData.companyName}
              onChange={handleInputChange}
              className="add-product-form__input"
            />
          </div>

          <div className="add-product-form__group">
            <Label htmlFor="location">Ubicación</Label>
            <Input 
              id="location" 
              name="location" 
              type="text" 
              placeholder="Ingresa la ubicación de la compañía"
              value={formData.location}
              onChange={handleInputChange}
              className="add-product-form__input"
            />
          </div>

          <div className="add-product-form__group">
            <Label htmlFor="contact">Contacto</Label>
            <Input 
              id="contact" 
              name="contact" 
              type="text" 
              placeholder="Ingresa el contacto de la compañía"
              value={formData.contact}
              onChange={handleInputChange}
              className="add-product-form__input"
            />
          </div>
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
