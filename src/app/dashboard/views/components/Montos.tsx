import React, { useState } from 'react';
import { Button, Input, Form, Table } from 'antd';
import Dashboard from '../Dashboard';

interface MontoTarjeta {
  cliente: string;
  celular: string;
  montoAprobado: number;
}

const MontosTarjetas: React.FC = () => {
  const [montos, setMontos] = useState<MontoTarjeta[]>([]);

  const columns = [
    {
      title: 'Nombre del Cliente',
      dataIndex: 'cliente',
      key: 'cliente',
    },
    {
      title: 'Número de Celular',
      dataIndex: 'celular',
      key: 'celular',
    },
    {
      title: 'Monto Aprobado',
      dataIndex: 'montoAprobado',
      key: 'montoAprobado',
      editable: true, // Columna editable
      render: (_: any, record: MontoTarjeta) => (
        <EditableCell value={record.montoAprobado} onChange={(value: number) => handleEdit(record.cliente, value)} />
      ),
    },
  ];

  const handleEdit = (cliente: string, value: number) => {
    const nuevosMontos = montos.map((monto) => {
      if (monto.cliente === cliente) {
        return { ...monto, montoAprobado: value };
      }
      return monto;
    });
    setMontos(nuevosMontos);
  };

  const handleSubmit = (values: { cliente: string; celular: string; montoAprobado: number }) => {
    const { cliente, celular, montoAprobado } = values;
    const nuevaSolicitud: MontoTarjeta = { cliente, celular, montoAprobado };
    setMontos([...montos, nuevaSolicitud]);
  };

  return (
    <Dashboard>

<div className="div-custom">
      <h2 className="center" style={{ margin: "0px 0px 20px" }}>Ingreso de Montos de Tarjetas Aprobadas</h2>

      <Form onFinish={handleSubmit} layout="inline">
        <Form.Item
          label="Nombre del Cliente"
          name="cliente"
          rules={[{ required: true, message: 'Por favor ingrese el nombre del cliente' }]}
        >
          <Input style={{ margin: "0px 0px 20px" }}/>
        </Form.Item>
        <Form.Item
          label="Número de Celular"
          name="celular"
          rules={[{ required: true, message: 'Por favor ingrese el número de celular' }]}
        >
          <Input style={{ margin: "0px 0px 20px" }}/>
        </Form.Item>
        <Form.Item
          label="Monto Aprobado"
          name="montoAprobado"
          rules={[{ required: true, message: 'Por favor ingrese el monto aprobado' }]}
        >
          <Input type="number" style={{ margin: "0px 0px 20px" }}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ margin: "0px 20px 0px 20px" }}>
            Agregar
          </Button>
        </Form.Item>
      </Form>
      <div>
        <h3>Montos ingresados:</h3>
        <Table columns={columns} dataSource={montos} />
      </div>
    </div>
    </Dashboard>
  );
};

interface EditableCellProps {
  value: number;
  onChange: (value: number) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({ value, onChange }) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const toggleEdit = () => {
    setEditing(!editing);
    setInputValue(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseInt(e.target.value));
  };

  const handleBlur = () => {
    setEditing(false);
    onChange(inputValue);
  };

  return editing ? (
    <Input value={inputValue} onChange={handleInputChange} onBlur={handleBlur} autoFocus />
  ) : (
    <div style={{ cursor: 'pointer' }} onClick={toggleEdit}>
      {value}
    </div>
  );
};

export default MontosTarjetas;
