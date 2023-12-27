import { notFound } from "next/navigation"; 

export default function jobtypeDetails( {params} : {params:{typeid: string, set_salaryid: string}} ){
    
    if(parseInt(params.set_salaryid) > 1000){
        notFound();
    }
    
    return (
        <>
            <h1> Details About job type {params.typeid}</h1>
            <h2>Set Salary ID: 1 {params.set_salaryid} </h2>
            <h2>Basic: 25000{params.set_salaryid} </h2>
        </>
    );
}