import React, { useState, useEffect, useCallback } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Editor from '../../components/write/Editor'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { initialize, updatePost, writePost } from '../../modules/write'

function EditorContainer({ history }: RouteComponentProps) {
  const dispatch = useAppDispatch()
  const { post, postError, postForEdit, originalPostId } = useAppSelector(({ write }) => ({
    post: write.post,
    postError: write.postError,
    postForEdit: write.postForEdit,
    originalPostId: write.originalPostId,
  }))
  const [writeForm, setWriteForm] = useState({
    title: (postForEdit && postForEdit.title) || '',
    content: (postForEdit && postForEdit.content) || '',
    tags: (postForEdit && postForEdit.tags) || [],
  })

  const handleChange = useCallback((e: { target: { name: string; value: string | string[] } }) => {
    const { name, value } = e.target
    setWriteForm((prevForm) => ({ ...prevForm, [name]: value }))
  }, [])

  useEffect(
    () => () => {
      dispatch(initialize())
    },
    [dispatch]
  )

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
      history.push(`/posts/@${Author?.username}/${id}`)
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
