import React from 'react';

const AddDoctorForm = () => {
    const AddDoctor = (event) => {
        event.preventDefault()
        const doctorName = event.target.doctorName.value;
        const doctorEmail = event.target.doctorEmail.value;
        const doctorNumber = event.target.doctorNumber.value;
        const DoctorImage = event.target.DoctorImage.value;
        const doctorDetail = { doctorName, doctorEmail, doctorNumber, DoctorImage };
        console.log(doctorDetail)
    }
    return (
        <form onSubmit={AddDoctor}>
            {/* doctor name  */}
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Doctor Name</span>
                </label>
                <input type="text" name='doctorName' placeholder="Doctor Name" class="input input-bordered input-primary w-full max-w-xs" required/>
            </div>
            {/* doctor email */}
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Doctor Email</span>
                </label>
                <input type="email" name='doctorEmail' placeholder="Doctor Email" class="input input-bordered input-primary w-full max-w-xs" required/>
            </div>
            {/* doctor number */}
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Doctor Number</span>
                </label>
                <input type="text" name='doctorNumber' placeholder="Doctor Number" class="input input-bordered input-primary w-full max-w-xs" required/>
            </div>
            <div class="form-control w-full max-w-xs">
                <input type="file" name='DoctorImage' placeholder="Doctor Number" class="my-3" required/>
            </div>
            <button class="btn btn-outline w-full">Add Doctor</button>
        </form>
    );
};

export default AddDoctorForm;