import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../LoadingSpinner';
import AddDoctorForm from './AddDoctorForm';
import ShowDoctors from './ShowDoctors';

const Home = () => {
    const { isLoading, data: doctors, refetch } = useQuery('doctors', () =>
        fetch('http://localhost:5000/doctors').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner color={'#781adb'} loading={isLoading} />
    }
    refetch()
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <ShowDoctors doctors={doctors}/>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Add Doctor</label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <AddDoctorForm  refetch={refetch}/>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Home;