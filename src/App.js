import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import './App.css';
import AddToDo from './Components/AddToDo';
import GetToDo from './Components/GetToDo';
import UpdateModal from './Components/UpdateModal';

function App() {
  const { data: allUsers, isLoading, refetch } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/user')
      const data = await res.json()
      return data
    }

  })
  const [modalData, setModalData] = useState(allUsers)

  return (
    <div className='flex justify-center items-center mx-auto h-screen flex-col'>
      <AddToDo refetch={refetch}></AddToDo>
      <GetToDo
        allUsers={allUsers}
        isLoading={isLoading}
        refetch={refetch}
        setModalData={setModalData}
      ></GetToDo>

      {
        modalData &&
        <UpdateModal
          setModalData={setModalData}
          modalData={modalData}
          refetch={refetch}
        ></UpdateModal>
      }
    </div>
  );
}

export default App;
