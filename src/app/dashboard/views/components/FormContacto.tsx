import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import Dashboard from '../Dashboard';

const FormContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    CI:'',
    correo: '',
    telefono: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Dashboard style={{width:"100%"}}>
      <div className="div-custom">
      <h2 className="center" style={{ margin: "0px 0px 20px" }}>Formulario de contacto</h2>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Nombre Completo:" required>
            <Input
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre Completo"
            />
          </Form.Item>
          <Form.Item label="Documento de identidad:" required>
            <Input
              name="CI"
              value={formData.CI}
              onChange={handleChange}
              placeholder="Documento de identidad"
            />
          </Form.Item>
          <Form.Item label="Correo Electrónico:" required>
            <Input
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Correo Electrónico"
            />
          </Form.Item>
          <Form.Item label="Teléfono:" required>
            <Input
              name="telefono"
              type='tel'
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Dashboard>
  );
};

export default FormContacto;
