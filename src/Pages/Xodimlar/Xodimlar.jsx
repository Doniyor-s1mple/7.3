import React from 'react'
import { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import XodimlarModal from './XodimlarModal'
import { addXodim, editXodim } from '../../redux/XodimlarReducer'

const Xodimlar = () => {

    const [Active, setActive] = useState(false)
    const [EditActive, setEditActive] = useState(false)
    const [CurrentItem, setCurrentItem] = useState('')

    const OpenModal = () => {
        setActive(prev => !prev)
    }

    const EditToggle = () => {
        setEditActive(prev => !prev)
    }

    const dispatch = useDispatch()

    var Xodimlar = useSelector((state) => state.Xodimlar)

    var SubmitForm = (event, values) => {
        dispatch(addXodim(values))
        setActive(false)
    }

    var Edit = (item) => {
        setCurrentItem(item)
        EditToggle()
    }

    var EditSubmitForm = (event, values) => {
        dispatch(editXodim({ values, CurrentItem }))

    }

    return (
        <div className='container'>
            <h2 className='text-center my-3'>Xodimlar</h2 >
            <div className="row">
                <div className="col-4">
                    <input type="search" className='form-control' placeholder='search...' />
                </div>
                <div className="col-8">
                    <button className='btn btn-outline-light px-3 float-end' onClick={OpenModal}>Add</button>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-12">
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Phone</th>
                                <th>Lavozim</th>
                                <th>Levels</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Xodimlar.map(item => <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.lavozim}</td>
                                    <td>{item.levels}</td>
                                    <td>
                                        <button className='btn btn-sm btn-outline-info mx-1' onClick={() => Edit(item)}>edit</button>
                                        <button className='btn btn-sm btn-outline-danger'>delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <XodimlarModal OpenModal={OpenModal} Active={Active} SubmitForm={SubmitForm} CurrentItem={CurrentItem} EditToggle={EditToggle} EditActive={EditActive} />
                </div>
            </div>
        </div>
    )
}

export default Xodimlar