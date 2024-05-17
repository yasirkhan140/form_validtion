import { useEffect, useState, } from 'react';

import { DataGrid, useGridApiRef, } from '@mui/x-data-grid';
import TableBar from './Components/TableBar';
const Table = () => {
    const [data,setData]=useState([])
    const [selected,setSelected]=useState([])
   const columns = [
  { field: 'name', headerName: 'Name', headerClassName: 'bg-teal-500  font-semibold ', width:150},
  { field: 'email', headerName: 'Email', headerClassName: 'bg-teal-500  font-semibold',width:200},
  { field: 'phone', headerName: 'Phone',  headerClassName: 'bg-teal-500  font-semibold' ,width:200},
  {
    field: 'q1',
    headerName: 'Question 1',
     headerClassName: 'bg-teal-500  font-semibold',
     width:150
  },
  {
    field: 'q2',
    headerName: 'Question2',
    description: 'This column has a value getter and is not sortable.',
    headerClassName: 'bg-teal-500  font-semibold',
     width:150
       },
  {
    field: 'q3',
    headerName: 'Question3',
    description: 'This column has a value getter and is not sortable.',
  width:150,
    headerClassName: 'bg-teal-500  font-semibold'
       },
  {
    field: 'q4',
    headerName: 'Question4',
    description: 'This column has a value getter and is not sortable.',
   width:150,
     headerClassName: 'bg-teal-500  font-semibold'
  },
];
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("submittedForms")))
  }, [])
    const apiRef = useGridApiRef();

  const handleEvent = (params) => {
    setSelected([...params])
  }
  useEffect(() => {
    apiRef.current.subscribeEvent(
  'rowSelectionChange',
  handleEvent,
);
  }, [])
  const handleDelete = () => {
    const allData = JSON.parse(localStorage.getItem("submittedForms"))
    const newData = allData.filter(element => {
      const check = selected.some((id) => id !== element.id)
      if (check) return element
      
    });
    localStorage.setItem("submittedForms", JSON.stringify(newData))
    setData(newData)
  }
  return (
    <div >
      <TableBar result={data.length} filters={ 2} />
      <DataGrid
        apiRef={ apiRef}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[20, 30,40,50,100]}
        checkboxSelection
        
         slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
       
      />
      <div className='float-right mr-2 mt-4 '>
        {!!selected.length && <button className='bg-pink-600 hover:bg-pink-700 p-1 text-white px-2 rounded text-sm' onClick={handleDelete}>
          Delete
        </button>}
      </div>
    </div>
  )
}

export default Table