export default function jobtypeDetails( {params} : {params:{salarytype: string}} ){
    return (
        <>
            <h1> Details About This job type</h1>
            <h2>Type ID: 1{params.salarytype} </h2>
            <h2>Type Name: Developer{params.salarytype}</h2>
           
            
        </>
    );
}