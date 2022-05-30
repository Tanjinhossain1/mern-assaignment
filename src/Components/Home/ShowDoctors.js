import React from 'react';
import Doctor from './Doctor';

const ShowDoctors = ({refetch,doctors}) => {
    
    return (
        <div>
            <div class="overflow-x-auto mt-12">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor,index)=> <Doctor refetch={refetch} index={index} doctor={doctor} key={doctor._id}/>)
                        }                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowDoctors;