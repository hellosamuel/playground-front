import React, { useState } from 'react'
import Button from '../common/Button'
import AskRemoveModal from './AskRemoveModal'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '2rem',
  },
}
function PostActionButtons({ onEdit, onRemove }) {
  const [modal, setModal] = useState(false)
  const onRemoveClick = () => {
    setModal(true)
  }
  const onCancel = () => {
    setModal(false)
  }
  const onConfirm = () => {
    setModal(false)
    onRemove()
  }

  return (
    <>
      <div style={styles.container}>
        <Button label="Edit" onClick={onEdit} />
        <Button label="Remove" color="red" onClick={onRemoveClick} />
      </div>
      <AskRemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  )
}

export default PostActionButtons
