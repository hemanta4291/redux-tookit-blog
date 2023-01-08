import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from '../features/Tags/TagsSlice'
import Tag from './Tag'

const Tags = () => {
  const dispatch = useDispatch()
  const {tags,isLoading,isError,error} = useSelector((state)=> state.tags)
  useEffect(() => {
    dispatch(fetchTags());
}, [dispatch]);
  return (
    <div className='flex aligin-center justify-center gap-8'>
      {
        tags?.map((tag)=>(
          <Tag title={tag.title} key={tag.id}/>
        ))
      }
        {/* <div className='py-2 px-4 border-2 rounded-full bg-slate-100 text-black cursor-pointer'>Blog</div>
        <div className='py-2 px-4 border-2 rounded-full bg-black text-white cursor-pointer'>portfolio</div>
        <div className='py-2 px-4 border-2 rounded-full bg-black text-white cursor-pointer'>service </div>
        <div className='py-2 px-4 border-2 rounded-full bg-black text-white cursor-pointer'>service </div>
        <div className='py-2 px-4 border-2 rounded-full bg-black text-white cursor-pointer'>service </div> */}
    </div>
  )
}

export default Tags