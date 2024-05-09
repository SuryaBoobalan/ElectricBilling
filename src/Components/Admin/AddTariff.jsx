import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useState } from 'react';
function AddTariff() {

    const [tariff, setTariff] = useState({
        tariffName: "",
        unitprice: ""
    });

    const onInputChange = (e) => {

        setTariff({ ...tariff, [e.target.name]: e.target.value });

    };

    const onPost = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:1111/Tariff`, tariff)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tariff Added Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <div>
            <div className="w-full max-w-xs" style={{ margin: '5% auto 0' }} >
                <form onSubmit={(e) => onPost(e)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email" data-testId="TariffName">
                            Tariff Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="tariffName" type="text" required="required"
                            onChange={(e) => onInputChange(e)} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email" data-testId="pricePerUnit">
                            Price Per Unit ₹
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="unitprice" type="text" required="required"
                            onChange={(e) => onInputChange(e)} />
                    </div>

                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add Tariff
                    </button>
                </form>

            </div>

        </div>

    )
}

export default AddTariff
