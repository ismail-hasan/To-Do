import React from 'react';

const AddToDo = ({ refetch }) => {

    const handleAdd = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value

        const AddToDo = { name }
        console.log(AddToDo)

        fetch('http://localhost:5000/user', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddToDo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                form.reset()
            })
    }
    return (
        <div className=''>
            <form onSubmit={handleAdd} className=''>
                <div className='flex'>
                    <input required name='name' type="text" placeholder="Type here" className="input input-bordered input-accent w-full" />
                    <button className="btn btn-accent">Button</button>
                </div>
            </form>
        </div>
    );
};

export default AddToDo;