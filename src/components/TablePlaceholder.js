import React, { useMemo } from 'react'
import { TableRow, TableCell } from '@marketgoo/ola'
import styles from './TablePlaceholder.module.css'

const TablePlaceholder = ({ cells = 4, rows = 5 }) => {
    const cellsMap = useMemo(() => Array(cells).fill(), [cells])
    const rowsMap = useMemo(() => Array(rows).fill(), [rows])

    return rowsMap.map((_, ri) => (
        <TableRow key={ri}>
            {cellsMap.map((_, ci) => (
                <TableCell key={ci}>
                    <div className={styles.placeholder} />
                </TableCell>
            ))}
        </TableRow>
    ))
}

export default TablePlaceholder
