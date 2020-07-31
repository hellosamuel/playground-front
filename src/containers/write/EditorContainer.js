import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Editor from '../../components/write/Editor'
import { initialize } from '../../modules/write'

function EditorContainer() {
  const dispatch = useDispatch()
  const [writeForm, setWriteForm] = useState({
    title: '',
    content: '',
    tags: [],
  })

  const handleChange = useCallback(e => {
    const { name, value } = e.target
    setWriteForm(prevForm => ({ ...prevForm, [name]: value }))
  }, [])

  useEffect(() => () => dispatch(initialize()), [dispatch])

  return <Editor form={writeForm} handleChange={handleChange} />
}

export default EditorContainer
