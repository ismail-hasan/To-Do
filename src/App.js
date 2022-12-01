import { useQuery } from '@tanstack/react-query';
import './App.css';
import AddToDo from './Components/AddToDo';
import GetToDo from './Components/GetToDo';

function App() {
  const { data: allUsers, isLoading, refetch } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/user')
      const data = await res.json()
      return data
    }

  })
  return (
    <div className='flex justify-center items-center mx-auto h-screen flex-col'>
      <AddToDo refetch={refetch}></AddToDo>
      <GetToDo
        allUsers={allUsers}
        isLoading={isLoading}
        refetch={refetch}
      ></GetToDo>
    </div>
  );
}

export default App;
