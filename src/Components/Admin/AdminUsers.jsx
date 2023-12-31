import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import InputTextt from '../InputTextt';
import '../Home.css'
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AdminUsers() {
const nav = useNavigate()

const data = useSelector((state)=>state.user)
// console.log(data);

  return (
    <div> 
      <div style={{textAlign:'center'}}>
      <h1>All Users</h1>
      </div>
      <br /><br />
      <div onClick={()=> nav('/signup')}>
        <Button text='Add New User' classes='me-1'  color='success' />
        </div> 
        <br /><br /><br />
       <div className='homeSearch' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
  <InputTextt search="search here" />
</div>

        <br /><br />
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Status</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
    
    {data.map((e) => (
        <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://icon-library.com/images/user-icon-jpg/user-icon-jpg-25.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{e.userName}</p>
                <p className='text-muted mb-0'>{e.userEmail}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
            <MDBBtn color='link' rounded size='sm'>
              Delete
            </MDBBtn>
            <MDBBtn color='link' rounded size='sm'>
              Ban 
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
   ) )}

    </MDBTable>
    </div>
  );
}