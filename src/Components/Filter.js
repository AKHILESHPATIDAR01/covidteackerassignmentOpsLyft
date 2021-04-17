import React from 'react'

function Filter() {
    return (
        <div>
            <div className='main_container'>
                <div className="filter_class">
                    <p>Filters:</p>
                    <ul className='filter_list'>
                        <li>
                            <select >
                                <option>Location</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </li>
                        <li> 
                            <select >
                                <option>Gender</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </li><li>
                            <select >
                                <option>Age</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </li><li>
                            <select >
                                <option>Status</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </li>
                        <li>
                            <input type='date' ></input>
                        </li><li>
                        <input type='date' ></input>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filter
