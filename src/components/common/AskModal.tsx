import React from 'react'
import Button from './Button'

const styles = {
  fullScreen: {
    position: 'fixed',
    zIndex: 30,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    width: '320px',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '4px',
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.125)',
  },
  title: {
    marginTop: 0,
    marginBottom: '1rem',
  },
  description: {
    marginBottom: '3rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}
function AskModal({
  visible,
  title,
  description,
  confirmText = 'Ok',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}) {
  if (!visible) return null
  return (
    <div style={styles.fullScreen}>
      <div style={styles.block}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
        <div style={styles.buttons}>
          <Button label={cancelText} onClick={onCancel} />
          <Button label={confirmText} color="red" onClick={onConfirm} />
        </div>
      </div>
    </div>
  )
}

export default AskModal
