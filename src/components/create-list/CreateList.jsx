import React, { useEffect, useState, useContext, useRef } from 'react'
import './create-list.scss'

// ICON
import { HiOutlineX } from 'react-icons/hi'

// COMPONENTS
import FormInput from '../form-input/FormInput'
import Button from '../button/Button'
import DispatchContext from '../contexts/DispatchContext'

function CreateList() {
  const appDispatch = useContext(DispatchContext)
  const [list, setList] = useState('')

  const handleAddList = () => {
    console.log('Adding new list...')
  }

  const cancelAddingList = () => {
    console.log('Canceled...')
    // view(true)
    appDispatch({ type: 'createList' })
  }

  return (
    <div className="list-creator u-flex-d-column" id="create-list">
      <FormInput type={'text'} onChange={e => setList(e.target.value)} focus={true} value={list} classes={`input--list`} placeholder={'Add list title'} />
      <div className="list-creator__actions">
        <Button onClick={handleAddList} classes={' btn--small btn--green btn--add-list'} autoFocus>
          Add list
        </Button>
        <HiOutlineX className="list-creator__icon" onClick={cancelAddingList} />
      </div>
    </div>
  )
}

export default CreateList
