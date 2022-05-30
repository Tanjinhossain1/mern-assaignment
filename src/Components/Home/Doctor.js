import React, { useState } from 'react';
import { toast } from 'react-toastify';
import UpdateModal from './UpdateModal';

const Doctor = ({ index, doctor }) => {
    const [openModal, setOpenModal] = useState(null);
    const [updateDoctor, setUpdateDoctor] = useState(null)
    const { doctorName, doctorEmail, doctorNumber, image, _id } = doctor;
    const updatingModal = (id) => {
        setOpenModal(true);
        setUpdateDoctor(id)
       
    }

    const deleteDoctor = (id)=>{
        console.log(id)
        const confirmDelete = window.confirm('confirm to delete it!!');
        if(confirmDelete){
            fetch(`http://localhost:5000/deleteDoctor/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                toast('delete success fully!!')
            })
        }
        
    }
    return (
        <tr>
            <th>{index}</th>
            <td><div class="avatar">
                <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} alt='doctorImage' />
                </div>
            </div></td>
            <th>{doctorName}</th>
            <td>{doctorEmail}</td>
            <td>{doctorNumber}</td>
            <td><label for="update-modal" onClick={() => updatingModal(_id)} class="btn btn-outline">Update</label></td>
            {
                openModal && <UpdateModal setOpenModal={setOpenModal} openModal={openModal} updateDoctor={updateDoctor} />
            }
            <td>
                <button onClick={()=>deleteDoctor(_id)} class="btn btn-circle btn-outline hover:bg-red-500 hover:border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default Doctor;