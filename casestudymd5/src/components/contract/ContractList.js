import React, {useEffect, useState} from "react";
import {getContractList} from "../../service/contract_service";

export function ContractList() {
    const [contract, setContract] = useState([]);
    const getContract = async () => {
        const data = await getContractList();
        setContract(data)
        console.log(contract)
    }
    useEffect(() => {
        getContract()
    }, []);

    return (
        contract && (
            <>
                <h1 className="title">List Contract</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr id="header">
                            <th>#</th>
                            <th>Contract Code</th>
                            <th>Date - Start</th>
                            <th>Date - End</th>
                            <th>Deposit</th>
                            <th>Total</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            contract.map((c,index)=>(
                                <tr key={c.id}>
                                    <td>{index+1}</td>
                                    <td>{c.code}</td>
                                    <td>{c.dateStart}</td>
                                    <td>{c.dateEnd}</td>
                                    <td>{c.depositMoney}</td>
                                    <td>{c.totalMoney}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </>

        )
    )
}