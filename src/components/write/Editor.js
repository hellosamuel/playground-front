import React, { useRef, useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.bubble.css'
import './Editor.css'

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
}

function Editor({ form, handleChange }) {
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

  return (
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
  )
}

export default Editor
