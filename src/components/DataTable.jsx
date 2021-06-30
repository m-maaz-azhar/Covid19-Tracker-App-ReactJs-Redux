import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import getData from '../api';
import { Table, InputGroup, FormControl } from 'react-bootstrap';

function DataTable() {
    const dispatch = useDispatch();
    const state = useSelector(state => state)

    useEffect(() => {
        getData(dispatch)
    }, [dispatch])

    const [searchQuery, setSearchQuery] = useState("")

    let getSearchQuery = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div>
            <div className="my-3 mx-5">
                <h3 className="py-2 text-center">SEARCH BY STATE CODE</h3>
                <InputGroup className="mb-3 border border-success">
                    <FormControl onChange={getSearchQuery}
                        placeholder="Search By State Code"
                        aria-label="Search By State"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
            </div>
            <div className="container-fluid">
                <Table striped bordered>
                    <thead className="thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Positive</th>
                            <th>Total Result</th>
                            <th>Hospitilized Currently</th>
                            <th>Death</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.data ? <>{<tr>
                            <td>{(state.data.find(obj => obj.state === searchQuery) || {}).state || '-'}</td>
                            <td>{(state.data.find(obj => obj.state === searchQuery) || {}).positive || '-'}</td>
                            <td>{(state.data.find(obj => obj.state === searchQuery) || {}).totalTestResults || '-'}</td>
                            <td>{(state.data.find(obj => obj.state === searchQuery) || {}).hospitalizedCurrently || '-'}</td>
                            <td>{(state.data.find(obj => obj.state === searchQuery) || {}).death || '-'}</td>
                            <td>{(state.data.find(obj => obj.state === searchQuery) || {}).dateModified || '-'}</td>
                        </tr>
                        }</> : <tr><td>Loading Data....</td></tr>}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default DataTable
