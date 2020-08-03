import React, { useRef, useEffect, useState, useCallback } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.bubble.css'
import './Editor.css'
import Button from '../common/Button'

const styles = {
  editorBlock: {
    paddingTop: '5rem',
    paddingBottom: '5rem',
  },
  titleInput: {
    fontSize: '3rem',
    outline: 'none',
    paddingBottom: '0.5rem',
    border: 'none',
    borderBottom: '1px solid gray',
    marginBottom: '2rem',
    width: '100%',
  },
  tagBoxBlock: {
    width: '100%',
    borderTop: '1px solid lightgray',
    paddingTop: '2rem',
    tag: {
      marginTop: 0,
      marginBottom: '0.5rem',
    },
  },
  tagForm: {
    borderRadius: '4px',
    overflow: 'hidden',
    display: 'flex',
    width: '256px',
    border: '1px solid darkgray',
    input: {
      outline: 'none',
      border: 'none',
      fontSize: '1rem',
      padding: '0.5rem',
      flex: 1,
    },
    button: {
      outline: 'none',
      border: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
      paddingRight: '1rem',
      paddingLeft: '1rem',
      backgroundColor: 'darkgray',
      color: 'white',
      fontWeight: 'bold',
    },
  },
  tagListBlock: {
    display: 'flex',
    marginTop: '0.5rem',
  },
  tag: {
    marginRight: '0.5rem',
    color: 'gray',
    cursor: 'pointer',
  },
  actionBtnsBlock: {
    marginTop: '1rem',
    marginBottom: '3rem',
  },
}

const TagItem = React.memo(({ tag, onRemove }) => (
  <div style={styles.tag} onClick={() => onRemove(tag)}>
    #{tag}
  </div>
))

const TagList = React.memo(({ tags, onRemove }) => (
  <div style={styles.tagListBlock}>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </div>
))

function Editor({ form, handleChange, onPublish, onCancel }) {
  const [input, setInput] = useState('')
  const [localTags, setLocalTags] = useState(form.tags || [])

  const quillElement = useRef(null)
  const quillInstance = useRef(null)

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: 'Write down your content...',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    })

    const quill = quillInstance.current
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        handleChange({
          target: { name: 'content', value: quill.root.innerHTML },
        })
      }
    })
  }, [handleChange])

  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    quillInstance.current.root.innerHTML = form.content
  }, [form.content])

  const onChange = useCallback(e => {
    setInput(e.target.value)
  }, [])

  const insertTag = useCallback(
    tag => {
      if (!tag || localTags.includes(tag)) return
      const nextTags = [...localTags, tag]
      setLocalTags(nextTags)
      handleChange({ target: { name: 'tags', value: nextTags } })
    },
    [localTags, handleChange]
  )

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      insertTag(input.trim())
      setInput('')
    },
    [input, insertTag]
  )

  const onRemove = useCallback(
    tag => {
      const nextTags = localTags.filter(t => t !== tag)
      setLocalTags(nextTags)
      handleChange({ target: { name: 'tags', value: nextTags } })
    },
    [localTags, handleChange]
  )

  return (
    <div>
      <div style={styles.editorBlock}>
        <input
          style={styles.titleInput}
          name="title"
          placeholder="Enter Title..."
          onChange={handleChange}
          value={form.title}
        />
        <div>
          <div ref={quillElement} />
        </div>
      </div>
      <div style={styles.tagBoxBlock}>
        <h4 style={styles.tagBoxBlock.tag}>Tags</h4>
        <form style={styles.tagForm} onSubmit={onSubmit}>
          <input
            style={styles.tagForm.input}
            placeholder="Enter Tag..."
            value={input}
            onChange={onChange}
          />
          <button style={styles.tagForm.button} type="submit">
            Add
          </button>
        </form>
        <TagList tags={localTags} onRemove={onRemove} />
      </div>
      <div style={styles.actionBtnsBlock}>
        <Button label="Cancel" onClick={onCancel} />
        <Button label="Save" color="orange" onClick={onPublish} />
      </div>
    </div>
  )
}

export default Editor
