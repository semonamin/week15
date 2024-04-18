import { useEffect,useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Entry from './Entry';
import UserCard from './components/UserCard';

function App() {
  const url='https://6616ac81ed6b8fa4348118c3.mockapi.io/users';

  const [users, setUsers] = useState([]);

  const getUsers = async () =>{
    try{
      await fetch(url)
      .then(data => data.json())
      .then(data => setUsers(data))
      
    } catch (error) {
      console.error('Error fetching data:', error)
    }
   }

   useEffect(() =>{
      getUsers();
    
    },[]);
       const deleteData = async(id) => {
      try{
        await fetch (`${url}/${id}`,{
          method: 'DELETE'
         }).then((response) => console.log(response))
      } catch (error) {
        console.error('Error deleting data:', error)
        } 
        getUsers();
    };

    const updateData = async(updateUser) => {
      try{
        const res = await fetch (url, {
          method: "PUT",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            name : updateUser.name,
            jobTitle: updateUser.jobtitle,
           companyName: updateUser.company,
          })

        })
        const data = await res.json()
        console.log(data)

      } catch (error) {
        console.log (error)
      }
    
    }

    const postMethod = async (newUser) => {
      try{
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
          name : newUser.name,
          jobTitle: newUser.jobtitle,
          companyName: newUser.company,
          })
        })
        const data = await res.json()
        console.log(data)

      } catch (error) {
        console.log (error)
      }
    }

  return ( 
    <div>
      <div className="container">
        <h1 className='display-3 text-center'>compeny api data</h1>
        <h2 className='lead fw-bold text-center'>using MockAPI for this project</h2>
        <div className='row'>
          <h1 className='display-3'>Necessary Form</h1>
          <div className='col-6 m-1 border border-2 shadow rounded-2 p-3'>
          <Entry postMethod={postMethod} setUsers={setUsers} />
          <UserCard users={users} deleteData={deleteData} />

          </div>
        </div>

    
    
      
    </div>

    </div>

  );
}

export default App;
