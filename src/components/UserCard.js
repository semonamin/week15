

function UserCard({users, deleteData}){

  return (
    <div>
       {users && users.map((user, index) => {
      return (
      <div key = {index}>
        <div>
          Name: {user.name}
          Job Title: {user.jobtitle}
          Company Name: {user.companyname}
          <button onClick={() => deleteData(user.id)}>Delete</button>
        </div>
    
      </div>
      )
     })}
    </div>
  )

}

export default UserCard;