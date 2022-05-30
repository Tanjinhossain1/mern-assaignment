import React, { useState } from 'react';
import UpdateModal from './UpdateModal';

const Doctor = ({ index, doctor,refetch }) => {
    const [openModal,setOpenModal] = useState(false);
    const [updateDoctor,setUpdateDoctor] = useState({})
    const { doctorName, doctorEmail, doctorNumber, image } = doctor;
    const updatingModal = (updateDoctor) =>{
        setOpenModal(!openModal);
        setUpdateDoctor(updateDoctor)
    }
    return (
        <tr>
            <th>{index}</th>
            <td><div class="avatar">
                <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} alt='doctorImage'/>
                </div>
            </div></td>
            <th>{doctorName}</th>
            <td>{doctorEmail}</td>
            <td>{doctorNumber}</td>
            <td><label for="update-modal" onClick={()=>updatingModal(doctor)}  class="btn btn-outline">Update</label></td>
            {
                openModal && <UpdateModal refetch={refetch} updateDoctor={updateDoctor}/>
            } 
        </tr>
    );
};

export default Doctor;