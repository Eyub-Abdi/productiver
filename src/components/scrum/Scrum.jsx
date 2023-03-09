import React, { useEffect, useState, useContext } from 'react'

import './scrum.scss'
// COMPONETNS
import CreateList from '../create-list/CreateList'
import { Link } from 'react-router-dom'
import { ImPlus } from 'react-icons/im'
import StateContext from '../contexts/StateContext'
import DispatchContext from '../contexts/DispatchContext'
function Scrum() {
  const { scrum } = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const bringListCeator = () => {
    console.log('Bringing list creator...')

    appDispatch({ type: 'createList' })
  }
  return (
    <div className="scrum-view">
      {scrum.createList ? (
        <CreateList />
      ) : (
        <Link onClick={bringListCeator} to="#create-list" className="text-btn btn--add-list">
          <span>Add new list</span> &rarr;
        </Link>
      )}
      {scrum.createList ? (
        <CreateList />
      ) : (
        <Link onClick={bringListCeator} to="#create-list" className="text-btn btn--add-list">
          <span>Add new list</span> &rarr;
        </Link>
      )}
      {scrum.createList ? (
        <CreateList />
      ) : (
        <Link onClick={bringListCeator} to="#create-list" className="text-btn btn--add-list">
          <span>Add new list</span> &rarr;
        </Link>
      )}
      {scrum.createList ? (
        <CreateList />
      ) : (
        <Link onClick={bringListCeator} to="#create-list" className="text-btn btn--add-list">
          <span>Add new list</span> &rarr;
        </Link>
      )}
      {scrum.createList ? (
        <CreateList />
      ) : (
        <Link onClick={bringListCeator} to="#create-list" className="text-btn btn--add-list">
          <span>Add new list</span> &rarr;
        </Link>
      )}
      {scrum.createList ? (
        <CreateList />
      ) : (
        <Link onClick={bringListCeator} to="#create-list" className="text-btn btn--add-list">
          <span>Add new list</span> &rarr;
        </Link>
      )}
      {scrum.createList ? (
        <CreateList />
      ) : (
        <Link onClick={bringListCeator} to="#create-list" className="text-btn btn--add-list">
          <span>Add new list</span> &rarr;
        </Link>
      )}
      {scrum.createList ? (
        <CreateList />
      ) : (
        <Link onClick={bringListCeator} to="#create-list" className="text-btn btn--add-list">
          <span>Add new list</span> &rarr;
        </Link>
      )}
    </div>
  )
}

export default Scrum
