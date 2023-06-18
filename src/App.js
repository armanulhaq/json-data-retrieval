import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';

const App = () => {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                setUsersData(data.users);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const data = React.useMemo(() => usersData, [usersData]);

    const columns = React.useMemo(
      () => [
          {
              Header: 'User Info',
              columns: [
                  {
                      Header: 'First Name',
                      accessor: 'firstName',
                  },
                  {
                      Header: 'Last Name',
                      accessor: 'lastName',
                  },
                  {
                      Header: 'Username',
                      accessor: 'username',
                  },
                  {
                      Header: 'Email',
                      accessor: 'email',
                  },
                  {
                      Header: 'Phone',
                      accessor: 'phone',
                  },
                  {
                      Header: 'Birth Date',
                      accessor: 'birthDate',
                  },
                  {
                      Header: 'Image',
                      accessor: 'image',
                      Cell: ({ cell: { value } }) => <img src={value} alt="user" height={50} width={50} />,
                  },
                  {
                      Header: 'Blood Group',
                      accessor: 'bloodGroup',
                  },
                  {
                      Header: 'Height',
                      accessor: 'height',
                  },
                  {
                      Header: 'Weight',
                      accessor: 'weight',
                  },
                  {
                      Header: 'Eye Color',
                      accessor: 'eyeColor',
                  },
                  {
                      Header: 'Hair Color',
                      accessor: 'hair.color',
                  },
                  {
                      Header: 'Hair Type',
                      accessor: 'hair.type',
                  },
                  {
                      Header: 'Domain',
                      accessor: 'domain',
                  },
                  {
                      Header: 'IP Address',
                      accessor: 'ip',
                  },
                  {
                      Header: 'Address',
                      accessor: d => `${d.address.address}, ${d.address.city}, ${d.address.state}, ${d.address.postalCode}`,
                  },
                  {
                      Header: 'MAC Address',
                      accessor: 'macAddress',
                  },
                  {
                      Header: 'University',
                      accessor: 'university',
                  },
                  {
                      Header: 'Bank Info',
                      accessor: d => `Card: ${d.bank.cardNumber} (expires: ${d.bank.cardExpire}), Currency: ${d.bank.currency}, IBAN: ${d.bank.iban}`,
                  },
                  {
                      Header: 'Company',
                      accessor: d => `${d.company.name}, ${d.company.department}, ${d.company.title}`,
                  },
                  {
                      Header: 'Company Address',
                      accessor: d => `${d.company.address.address}, ${d.company.address.city}, ${d.company.address.state}, ${d.company.address.postalCode}`,
                  },
                  {
                      Header: 'EIN',
                      accessor: 'ein',
                  },
                  {
                      Header: 'SSN',
                      accessor: 'ssn',
                  },
                  {
                      Header: 'User Agent',
                      accessor: 'userAgent',
                  },
              ],
          },
      ],
      []
  );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
      <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Poppins, sans-serif' }}>
      <thead>
          {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                      <th
                          {...column.getHeaderProps()}
                          style={{
                              background: 'black',
                              color: 'white',
                              padding: '10px',
                              textAlign: 'left',
                              fontFamily: 'Poppins, sans-serif'
                          }}
                      >
                          {column.render('Header')}
                      </th>
                  ))}
              </tr>
          ))}
      </thead>
      <tbody {...getTableBodyProps()}>
          {rows.map(row => {
              prepareRow(row);
              return (
                  <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                          return (
                              <td
                                  {...cell.getCellProps()}
                                  style={{
                                      padding: '10px',
                                      background: '#111',
                                      color: 'white',
                                      fontFamily: 'Poppins, sans-serif',
                                      width: 'auto'
                                  }}
                              >
                                  {cell.render('Cell')}
                              </td>
                          );
                      })}
                  </tr>
              );
          })}
      </tbody>
  </table>
  
    );
};

export default App;
