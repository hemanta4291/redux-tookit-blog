import React from 'react'
import { Link } from 'react-router-dom'

const BlogsGridItem = ({video}) => {
    const {title,id} = video
  return (
        <div className='border-2 p-3 text-center'>
            <Link to={`videos/${id}`}>
                <h2>{title}</h2>
                <p>description</p>
                <span>details</span>
            </Link>
        </div>
  )
}

export default BlogsGridItem