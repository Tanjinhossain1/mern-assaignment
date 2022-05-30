import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddDoctorForm = ({refetch}) => {
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
                    const doctorDetail = { doctorName, doctorEmail, doctorNumber, image };
                    fetch(`http://localhost:5000/addDoctor`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctorDetail)
                    })
                        .then(res => res.json())
                        .then(doctorData => {
                            console.log(doctorData)
                            refetch()
                            toast('Doctor Add Success Fully!!')
                            event.target.reset()
                        })
                }
            })
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <input class="my-3" type="file"  {...register("DoctorImage", { required: true })} required />
            </div>
            <button class="btn btn-outline w-full">Add Doctor</button>
        </form>
    );
};

export default AddDoctorForm;