import React from 'react';

const Table = (props) => {
    const { name, displayName, selectedDate, location
    } = props.row
    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td colspan="2">{displayName}</td>
                        <td>{selectedDate}</td>
                        <td>{location}</td>
                        <td>{name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;