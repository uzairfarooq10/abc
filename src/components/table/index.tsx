'use client';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Product, Products, Review } from '@/constant/types';
import { Button } from '@mui/material';
import Modal from '../modal';
import { useState } from 'react';

interface Column {
  id:
    | 'id'
    | 'title'
    | 'description'
    | 'category'
    | 'price'
    | 'discountPercentage'
    | 'rating'
    | 'stock'
    | 'tags'
    | 'brand'
    | 'actions';
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'id', label: 'SR.', minWidth: 50, align: 'right' },
  { id: 'title', label: 'Title', minWidth: 130 },
  { id: 'description', label: 'Description', minWidth: 150 },
  { id: 'category', label: 'Category', minWidth: 80 },
  {
    id: 'price',
    label: 'Price\u00a0($)',
    minWidth: 80,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'discountPercentage',
    label: 'Discount\u00a0(%)',
    minWidth: 80,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'rating',
    label: 'Rating',
    minWidth: 80,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  { id: 'stock', label: 'Stock', minWidth: 80, align: 'right' },
  { id: 'tags', label: 'Tags', minWidth: 100 },
  { id: 'brand', label: 'Brand', minWidth: 100 },
  { id: 'actions', label: 'Actions', minWidth: 100 },
];

export default function StyledTable({ products }: { products: Products }) {
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleReviewsButton = () => {
    setIsModalOpen(true);
  };

  return (
    <Paper sx={{ overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: '75vh', paddingBottom: '50px' }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ fontWeight: 'bold', height: '50px !important' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products?.products?.map((row: Product) => {
                return (
                  <TableRow
                    sx={{
                      backgroundColor: `${row.id % 2 === 0 ? '' : '#F0F0F0'}`,
                      height: '80px',
                    }}
                    role='checkbox'
                    tabIndex={-1}
                    key={row.id}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'actions' ? (
                            <Button
                              onClick={() => {
                                if (row?.reviews) handleReviewsButton();
                              }}
                              variant='outlined'
                              color='success'
                              size='small'
                              value={row.id}
                            >
                              Reviews
                            </Button>
                          ) : column.format && typeof value === 'number' ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
