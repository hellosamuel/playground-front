import React from 'react'
import AskModal from '../common/AskModal'

interface AskRemoveModalProps {
  visible: boolean
  onConfirm: () => void
  onCancel: () => void
}
function AskRemoveModal({ visible, onConfirm, onCancel }: AskRemoveModalProps) {
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
