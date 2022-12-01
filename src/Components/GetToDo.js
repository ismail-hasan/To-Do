import React from 'react';

const GetToDo = ({ allUsers, isLoading, refetch }) => {



    if (isLoading) {
        return <h1 className='text-4xl'>loading </h1>
    }
    console.log(allUsers)


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                }
            })
    }

    return (
        <div className='flex justify-start items-start flex-col'>
            {
                allUsers.map(user =>
                    <p key={user._id}>{user.name}
                        <button onClick={() => handleDelete(user._id)} className='btn btn-xs ml-5'>delete</button>
                    </p>)
            }
        </div>
    );
};

export default GetToDo;