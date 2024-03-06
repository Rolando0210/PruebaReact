import React, { useState } from 'react';
import { Button, Table } from 'antd';
import Dashboard from '../Dashboard';

const Transacciones: React.FC = () => {
  const [solicitudes, setSolicitudes] = useState([
    { id: 1, nombre: 'Juan', apellido: 'Pérez', estado: 'Pendiente' },
    { id: 2, nombre: 'María', apellido: 'Gómez', estado: 'Pendiente' },
    { id: 3, nombre: 'Carlos', apellido: 'López', estado: 'Pendiente' },
  ]);

  const aprobarSolicitud = (id: number) => {
    const nuevasSolicitudes = solicitudes.map((solicitud) => {
      if (solicitud.id === id) {
        return { ...solicitud, estado: 'Aprobada' };
      }
      return solicitud;
    });
    setSolicitudes(nuevasSolicitudes);
  };

  // Función para rechazar una solicitud
  const rechazarSolicitud = (id: number) => {
    const nuevasSolicitudes = solicitudes.map((solicitud) => {
      if (solicitud.id === id) {
        return { ...solicitud, estado: 'Rechazada' };
      }
      return solicitud;
    });
    setSolicitudes(nuevasSolicitudes);
  };

  const columnas = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
    { title: 'Apellido', dataIndex: 'apellido', key: 'apellido' },
    { title: 'Estado', dataIndex: 'estado', key: 'estado' },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_: any, solicitud: any) => (
        <span>
          <Button
            type="primary"
            onClick={() => aprobarSolicitud(solicitud.id)}
            disabled={solicitud.estado !== 'Pendiente'}
          >
            Aprobar
          </Button>{' '}
          <Button
            
            onClick={() => rechazarSolicitud(solicitud.id)}
            disabled={solicitud.estado !== 'Pendiente'}
          >
            Rechazar
          </Button>
        </span>
      ),
    },
  ];

  return (
    <Dashboard>

<div>
      <h2 className="center" style={{ margin: "0px 0px 20px" }}>Solicitudes de Tarjetas</h2>

      <Table columns={columnas} dataSource={solicitudes} />
    </div>
    </Dashboard>
  );
};

export default Transacciones;
