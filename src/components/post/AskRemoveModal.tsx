import React from 'react'
import AskModal from '../common/AskModal'

function AskRemoveModal({ visible, onConfirm, onCancel }) {
  return (
    <AskModal
      visible={visible}
      title="Remove post"
      description="Are you sure you want to remove this post?"
      confirmText="Remove"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  )
}

export default AskRemoveModal
