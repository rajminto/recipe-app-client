import React from 'react'
import './tags-list.css'

// Component Imports
import Tag from './Tag'

const TagsList = ({ tags }) => {
  const tagComponents = tags.map(tag => <Tag key={tag.id} name={tag.name} />)

  return (
    <div>
      {tagComponents}
    </div>
  )
}

export default TagsList