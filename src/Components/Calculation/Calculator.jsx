import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
function Calculator() {

    const [transaction, setTransaction] = useState({
        units: "",
        tariff: "",
        total: "",
        user: {
            userId : ""
        }
    }
    );

    const [idList, setIdList] = useState([]);

    const [tarifList, setTariffList] = useState([]);
    const userfetch = async() => {
        const response = await axios.get("http://localhost:1111/Userid")
        setIdList(response.data);
        
    }
    const tarriffetch = async() => {
        const request = await axios.get("http://localhost:1111/TariffName")
        setTariffList(request.data);
        
        
    }

    
    const onInputChange = (e) => {

        if (e.target.name === "userId") {

            setTransaction({ ...transaction, user: { userId: e.target.value } });

        }
        else if (e.target.name === "units") {
          const units = e.target.value;
          const tariffamount = 6.5;
          const totalamount = units * tariffamount;
      
          setTransaction({ ...transaction, units, total: totalamount });
        } else {
          setTransaction({ ...transaction, [e.target.name]: e.target.value });
        }
      };

    useEffect(()=> {
        userfetch()
        tarriffetch()
       
    }, [])

    const onPost = (e) => {
        e.preventDefault();
        console.log(transaction)
        axios.post(`http://localhost:1111/Calc`, transaction)
        Swal.fire({
            position: "center",
            icon: "info",
            title: "Electric Bill for "+ transaction.tariff + " usage is " + transaction.total + "₹", 
            
            showConfirmButton: false,
            timer: 2000
          });
    }
    return (
        <div>
            <div className="container" style={{ height: '100vh', padding: '100px' }} >
                <div className="w-full max-w-xs" style={{ margin: '5% auto 0' }} >
                    <form onSubmit={(e) => onPost(e)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="mobile" data-testId="euserId">
                                User ID
                            </label>
                            {/* <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="deptid" type="text" required="required"
                            onChange={(e) => onInputChange(e)} /> */}

                            <select value={transaction.user.userId} onChange={(e) => onInputChange(e)} name="userId" id = "userId" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                                <option selected>User ID</option>
                                {
                                    idList.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))
                                }




                            </select>


                        </div>



                    <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="mobile" data-testId="eTariffList">
                                Tariff
                            </label>

                            <select value={transaction.tariff} onChange={(e) => onInputChange(e)} name="tariff" id = "tariff" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                                <option selected>Tariff</option>
                                {
                                    tarifList.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))
                                }
                                
                            </select>


                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Units
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="units" id = "units" type="text" required="required"
                                onChange={(e) => onInputChange(e)} />
                        </div>
                       
                        <button id = "calculatebutton"class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Calculate
                        </button>
                      
                    </form>
                   
                </div> <p class="text-center text-gray-500 text-xs">
                        &copy;2024 TANGED Corp. Government of TamilNadu.
                    </p>
            </div>
        </div>
    )
}

export default Calculator
