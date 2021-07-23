import React from 'react'
import { Link } from 'react-router-dom'
import qs from 'querystring'
import Button from '../common/Button'

const styles = {
  paginationBlock: {
    width: '320px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '3rem',
    gridArea: 'footer',
  },
}

type BuildLinkKey = 'username' | 'tag' | 'page'
const buildLink = ({ username, tag, page }: Pick<PaginationProps, BuildLinkKey>) => {
  const query = qs.stringify({ tag, page })
  return username ? `/posts/@${username}?${query}` : `/posts/?${query}`
}

interface PaginationProps {
  page: number
  lastPage: number
  username: string
  tag: string
}
function Pagination({ page, lastPage, username, tag }: PaginationProps) {
  return (
    <div style={styles.paginationBlock}>
      <Link to={page === 1 ? '#' : buildLink({ username, tag, page: page - 1 })}>
        <Button label="<=" disable={page === 1} />
      </Link>
      <div>{`${page} of ${lastPage}`}</div>
      <Link to={page === lastPage ? '#' : buildLink({ username, tag, page: page + 1 })}>
        <Button styles={{ marginLeft: 0 }} label="=>" disable={page === lastPage} />
      </Link>
    </div>
  )
}

export default Pagination
