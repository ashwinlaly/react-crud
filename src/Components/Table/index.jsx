import React from 'react';

const Tbody = (props) => {
    return (
        <>
            <tbody>
                { props.body.map((i,j) => {
                    return (
                        <tr key={j}>
                            { Object.keys(i).map((m,n) => {
                                return (
                                    <td key={n}>{i[m]}</td>
                                )
                            })}
                        </tr>
                ) }) }
            </tbody>
        </>
    )
}

const Thead = (props) => {
    return (
        <>
            <thead>
                <tr>
                    { (Object.keys(props.head[0]).map((i,j) => {
                        return <th scope="col" key={j}>{i}</th>
                    })) }
                </tr>
            </thead>
        </>
    )
}

const Table = (props) => {
    return (
        <>
            { (props.data.length !== 0) ?  
                <table className={`table`}>
                    <Thead head={props.data}/>
                    <Tbody body={props.data}/>
                </table>
                : <div className='row'>No data found</div>
            }
        </>
    )
}

export default Table;