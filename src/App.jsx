import { useState, useRef } from 'react';
import { Table, Input, Button } from 'antd';
import './App.css';

const App = () => {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  };

  const getColumnSearchProps = dataIndex => { // dataIndex = 'nombre'
    return {
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilter }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref ={searchInput}
            placeholder={`Buscar ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [] )}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Buscar
          </Button>
        </div>
      )
    };
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
      width: '30%',
      ...getColumnSearchProps('nombre')
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
  ];

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
  ];

  return (
    <>
      <h1>Filter table on antd</h1>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </>
  )
};

export default App;