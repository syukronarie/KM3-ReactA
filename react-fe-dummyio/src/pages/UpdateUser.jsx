import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import FormUser from '../components/FormUser'
import { fetchUserByID } from '../store/features/usersSlice';

const UpdateUser = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users.currentUser)
    const userID = useParams()
    
    useEffect(() => {
        dispatch(fetchUserByID(userID.id))
    }, [])
    

  return (
    <div className='container-post'>
      <h1 style={{paddingLeft: 85}}>Edit User</h1>
        {/* id, title, firstname, lastname, picture */}
      <FormUser id={currentUser} data={currentUser} type={'edit-user'}/>
    </div>
  )
}

export default UpdateUser
