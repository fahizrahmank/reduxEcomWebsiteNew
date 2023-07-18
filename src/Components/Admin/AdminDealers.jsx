import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import InputTextt from '../InputTextt';
import '../Home.css'
import Button from '../Button';

export default function AdminDealers() {
  return (
    <div> 
      <br /><br />
      <div style={{textAlign:'center'}}>
        <h1>All Dealers</h1>
      </div>
      <div>
        <Button text='Add New Dealer' classes='me-1'  color='success' />
        </div> 
        <br /><br /><br />
       <div className='homeSearch' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
  <InputTextt search="search here" />
</div>

        <br /><br />
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Dealer Name</th>
          <th scope='col'>Dealer Email</th>
          <th scope='col'> Dealer Status</th>
          <th scope='col'>Dealer Actions</th>
          <th scope='col'>Dealer Adress</th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
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
    </MDBTable>
    </div>
  );
}