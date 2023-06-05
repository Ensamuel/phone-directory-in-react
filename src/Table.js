import React from 'react'

const Table = ({userArray, DeleteRow}) => {
  return (
    <div>
        <table className="table">
            <tbody>
              <tr className="table__row">
                <td className="table__column">First Name</td>
                <td className="table__column">Last Name</td>
                <td className="table__column">Phone no</td>
              </tr>
              
              {/** map throught the user array and update the input data to the table */}
              {userArray.map((items, i) => {
                return (
                  <tr key={i} className="table__row">
                    <td className="table__column">{items.firstName}</td>
                    <td className="table__column">{items.lastName}</td>
                    <td className="table__column">{items.phoneNumber}</td>
                    <td>
                      <button onClick={() => DeleteRow(i)} className='delete__row'>delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
    </div>
  )
}

export default Table