import { Table } from 'antd';
import './App.css';

const App = () => {

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
      width: '30%',
    },
    {
      title: 'Apellido',
      dataIndex: 'apellido',
      key: 'apellido',
      width: '30%',
    },
    {
      title: 'Edad',
      dataIndex: 'edad',
      key: 'edad',
      width: '30%',
    }
  ]

  const data = [
    {
      key: '1',
      nombre: 'Miguel',
      apellido: 'Lopez',
      edad: 34
    },
    {
      key: '2',
      nombre: 'Beatriz',
      apellido: 'Larios',
      edad: 24
    },
    {
      key: '3',
      nombre: 'Hannia',
      apellido: 'Lopez',
      edad: 24
    },
    {
      key: '4',
      nombre: 'Ulises',
      apellido: 'Vega',
      edad: 53
    }
  ]

  return (
    <>
      <h1>Filter table on antd</h1>
      <Table
        columns={columns}
        dataSource={data}
      />
    </>
  )
}

export default App