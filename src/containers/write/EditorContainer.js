import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Editor from '../../components/write/Editor'
import { initialize, updatePost, writePost } from '../../modules/write'

function EditorContainer({ history }) {
  const dispatch = useDispatch()
  const { post, postError, postForEdit, originalPostId } = useSelector(
    ({ write }) => ({
      post: write.post,
      postError: write.postError,
      postForEdit: write.postForEdit,
      originalPostId: write.originalPostId,
    })
  )
  const [writeForm, setWriteForm] = useState({
    title: (postForEdit && postForEdit.title) || '',
    content: (postForEdit && postForEdit.content) || '',
    tags: (postForEdit && postForEdit.tags) || [],
  })

  console.log(writeForm)

  const handleChange = useCallback(e => {
    const { name, value } = e.target
    setWriteForm(prevForm => ({ ...prevForm, [name]: value }))
  }, [])

  useEffect(() => () => dispatch(initialize()), [dispatch])

  const onPublish = () => {
    if (originalPostId) {
      dispatch(
        updatePost({
          title: writeForm.title,
          content: writeForm.content,
          tags: writeForm.tags,
          id: originalPostId,
        })
      )
      return
    }
    dispatch(
      writePost({
        title: writeForm.title,
        content: writeForm.content,
        tags: writeForm.tags,
      })
    )
  }

  const onCancel = () => {
    history.goBack()
  }

  useEffect(() => {
    if (post) {
      const { id, Author } = post
      history.push(`/posts/@${Author.username}/${id}`)
    }
    if (postError) {
      console.error(postError)
    }
  }, [history, post, postError])

  return (
    <Editor
      form={writeForm}
      handleChange={handleChange}
      onPublish={onPublish}
      onCancel={onCancel}
    />
  )
}

export default withRouter(EditorContainer)
