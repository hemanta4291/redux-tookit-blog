import React from 'react'

const BlogDetail = () => {
  return (
    <div className='container mx-auto px-4'>
        <div className='grid grid-cols-3 gap-2 lg:gap-8'>
            <div className='col-span-full w-full space-y-8 lg:col-span-2 border-2 p-4'>
                <h2>Title</h2>
                <p>lorem50  ffsdfsdfsdfsdfsd</p>
            </div>
            <div className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto border-2 p-4'>
                dfdfd
            </div>
        </div>
    </div>
  )
}

export default BlogDetail