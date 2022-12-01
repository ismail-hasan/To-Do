import React from 'react';

const UpdateModal = ({ modalData, refetch, setModalData }) => {
    console.log('data', modalData)

    const handleData = (e) => {
        e.preventDefault()
        const name = e.target.inputName.value
        const updateName = { name }
        console.log(updateName)

        fetch(`http://localhost:5000/allusers/${modalData._id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateName)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    setModalData(null)
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleData}>
                        <input defaultValue={modalData?.name} readOnly disabled type="text" placeholder="Type here" className="input input-bordered input-accent w-full" />
                        <input required name='inputName' defaultValue={modalData?.name} type="text" placeholder="Type here" className="input input-bordered input-accent w-full mt-5" />
                        <button className='btn btn-success mt-5'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;