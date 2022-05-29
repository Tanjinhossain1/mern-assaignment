import React from 'react';
import AddDoctorForm from './AddDoctorForm';

const Home = () => {

    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">

                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Add Doctor</label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <AddDoctorForm />
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Home;