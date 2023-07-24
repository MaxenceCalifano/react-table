import { useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'
import PropTypes from 'prop-types';


function TableHeader({ title,
    index,
    selectedColumn,
    setSelectedColumn,
    sortedData,
    setSortedData,
    columns }) {
    const [ascending, setAscending] = useState(false)


    /**
 * @param {number} columnIndex 
 */
    function sort(columnIndex, ascending) {
        // save which column is selected, so the others are unselected
        setSelectedColumn(columnIndex)
        // Create a copy of the state to work on it, so react will notice that the object has changed
        const data = [...sortedData]
        data.sort((a, b) => {
            if (ascending === true) {
                if (a[columns[columnIndex].data].toLowerCase() < b[columns[columnIndex].data].toLowerCase())
                    return -1
                if (a[columns[columnIndex].data].toLowerCase() > b[columns[columnIndex].data].toLowerCase())
                    return 1
            }

            if (ascending === false) {
                if (a[columns[columnIndex].data].toLowerCase() > b[columns[columnIndex].data].toLowerCase())
                    return -1
                if (a[columns[columnIndex].data].toLowerCase() < b[columns[columnIndex].data].toLowerCase())
                    return 1
            }

        })

        setSortedData(data)
    }

    return (
        <th>
            {title}
            {index === selectedColumn ?
                ascending ?
                    // Will display a down arrow
                    <FaSortUp onClick={() => {
                        console.log("🚀 ~ file: EmployeesTable.jsx:76 ~ TableHeader ~ ascending:", ascending)
                        sort(index, !ascending)
                        setAscending(false)
                    }} />
                    //Will display an up arrow
                    : <FaSortDown onClick={() => {
                        sort(index, !ascending)
                        setAscending(true)
                    }} />
                // Will display grey up and down arrow
                : <FaSort onClick={() => {
                    sort(index, ascending)
                    setAscending(false)
                }} style={{ color: "grey" }} />}
        </th>
    );
}

TableHeader.propTypes = {
    title: PropTypes.string,
    index: PropTypes.number,
    selectedColumn: PropTypes.number,
    setSelectedColumn: PropTypes.func,
    sortedData: PropTypes.array,
    setSortedData: PropTypes.func,
    columns: PropTypes.array
}

export default TableHeader;