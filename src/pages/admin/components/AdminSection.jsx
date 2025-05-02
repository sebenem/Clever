import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteadminThunk, getadminThunk, postadminThunk } from '../../../redux/reducers/adminSlice'
import style from './AdminSection.module.scss'
const AdminSection = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getadminThunk())
    }, [])

    const admin=useSelector((state) => state.admin.admin)

    const deleteadmin=(item)=>{
        dispatch(deleteadminThunk(item))
    }
const submit=(data)=>{
    dispatch(postadminThunk(data))
}
    const formik = useFormik({
        initialValues: {
            thumbnail: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            submit(values)
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
    <div className={style.container}>
         <form onSubmit={formik.handleSubmit}>
      
       <input
         id="thumbnail"
         name="thumbnail"
         type="text"
         placeholder='Thumbnail'
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
      
       <input
         id="title"
         name="title"
         type="text"
         placeholder='Title'
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
     
       <input
         id="price"
         name="price"
         type="text"
         placeholder='Price'
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <button type="submit">Submit</button>
     </form>
      <div className={style.table}>
        <table>
            <thead>
                <tr>
                    <th>Thumbnail</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {admin && admin.map(item =>{
                    return <tr>
                        <td><img src={item.thumbnail} alt="" /></td>
                        <td><h2>{item.title}</h2></td>
                        <td><span>{item.price}</span></td>
                        <td><button onClick={()=> deleteadmin(item.id)}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminSection
