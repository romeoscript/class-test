import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'

const ProfitTable = () => {
      const rows = [
        {
          id: 1,
          user: "Acer Nitro 5",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          Person: "John Smith",
          avail: 39393,
          amount: 785,
          method: "786",
          status: "Buy",
        },
        {
          id: 2,
          user: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          Person: "Michael Doe",
          avail: 39393,
          amount: 900,
          method: "786 ",
          status: "Buy",
        },
        {
          id: 3,
          user: "Redragon S101",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          Person: "John Smith",
          avail: 39393,
          amount: 35,
          method: "786",
          status: "Buy",
        },
        {
          id: 4,
          user: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          Person: "Jane Smith",
          avail: 39393,
          amount: 920,
          method: "786",
          status: "Buy",
        },
        {
          id: 5,
          user: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          Person: "Harold Carol",
          avail: 39393,
          amount: 2000,
          method: "786",
          status: "Buy",
        },
        {
          id: 5,
          user: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          Person: "Harold Carol",
          avail: 39393,
          amount: 2000,
          method: "786",
          status: "Buy",
        },
        {
          id: 5,
          user: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          Person: "Harold Carol",
          avail: 39393,
          amount: 2000,
          method: "786",
          status: "Buy",
        },
        {
          id: 5,
          user: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          Person: "Harold Carol",
          avail: 39393,
          amount: 2000,
          method: "786",
          status: "Buy",
        },
      ];
  return (
   <>
    <TableContainer component={Paper} style={{ height:'70%',overflowY:'hidden' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
        
            {/* <TableCell className="tableCell">Type</TableCell> */}
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Available Qty</TableCell>
            <TableCell className="tableCell">Maximum Qty</TableCell>
            <TableCell className="tableCell">Rate</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} className='table_row'>
             
             
              <TableCell className="tableCell tcel2" > <img className='table_image' src={row.img} alt="" />{row.Person} </TableCell>
              <TableCell className="tableCell">{row.avail} <span>USD</span> </TableCell>
              <TableCell className="tableCell">{row.amount} <span>USD</span> </TableCell>
              <TableCell className="tableCell">{row.method} <span>NGN</span> </TableCell>
              <TableCell className="tableCell">
                <span className='tableCell buy'>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
   </>
  )
}

export default ProfitTable
