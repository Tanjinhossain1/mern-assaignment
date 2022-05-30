import React from 'react';
import { useState } from "react";
import ClipLoader from "react-spinners/FadeLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const LoadingSpinner = ({ loading, color }) => {
    return (
        <div className='my-32'>
            <ClipLoader color={color} loading={loading} css={override} size={150} />
        </div>
    );
};

export default LoadingSpinner;