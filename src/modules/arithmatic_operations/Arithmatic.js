import React, { useState } from 'react'

export const Arithmatic = () => {
    const [data, setData] = useState({
        n1: 0,
        operator: '+',
        n2: 0,
        result: 0

    })
    const [result, setResult] = useState(0)
    const [tableData, setTableData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setResult(eval(data.n1 + data.operator + data.n2))
        setTableData([...tableData, data])
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='number' name='n1' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
                <select name='operator' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type='number' name='n2' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
                <button type='submit'>=</button>
                <span onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>{result || 0}</span>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>n1</th>
                        <th>operator</th>
                        <th>n2</th>
                        <th>result</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.n1}</td>
                            <td>{item.operator}</td>
                            <td>{item.n2}</td>
                            <td>{item.result}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
