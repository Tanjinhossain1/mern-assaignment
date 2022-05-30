import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateModal = ({ updateDoctor,setOpenModal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageStoreKey = `dd6aa9e917ed30c4f9f495bf1f8866ee`;

    const onSubmit = (data,event) => {
        const doctorName = data.doctorName;
        const doctorEmail = data.doctorEmail;
        const doctorNumber = data.doctorNumber;
        const image = data.DoctorImage[0];

        const formData = new FormData();
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const doctorDetail = { doctorName, doctorEmail, doctorNumber, image }
                    console.log(doctorDetail)
                    fetch(`http://localhost:5000/updateDoctor/${updateDoctor}`,{
                        method: 'PUT',
                        headers:{
                            'content-type':'application/json'
                        },
                        body: JSON.stringify(doctorDetail)
                    })
                    .then(res=>res.json())
                    .then(updateDoctor=>{
                        console.log(updateDoctor)
                       
                        event.target.reset()
                        setOpenModal(null)
                    })
                    
                }
            })
    }

    return (
        <div>
            {/* <h1>Update Doctor</h1> */}
            {/* <label class="btn modal-button">open modal</label> */}
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <form className='w-3/4 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        {/* doctor name  */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Doctor Name</span>
                            </label>
                            <input type="text" placeholder="Doctor Name" {...register("doctorName", { required: true })} class="input input-bordered input-primary w-full max-w-xs" required />
                        </div>
                        {/* doctor email */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Doctor Email</span>
                            </label>
                            <input type="email" placeholder="Doctor Email" {...register("doctorEmail", { required: true })} class="input input-bordered input-primary w-full max-w-xs" required />
                        </div>
                        {/* doctor number */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Doctor Number</span>
                            </label>
                            <input type="number" placeholder="Doctor Number" {...register("doctorNumber", { required: true })} class="input input-bordered input-primary w-full max-w-xs" required />

                        </div>
                        {/* doctor image  */}
                        <div class="form-control w-full max-w-xs">
                            <input class="my-3 " type="file"  {...register("DoctorImage", { required: true })} required />
                        </div>
                        <button class="btn btn-outline w-full">Update</button>                   
                    </form>
                    <div class="modal-action">
                        <label for="update-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UpdateModal;