import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../features/Blogs/BlogsSlice';
import BlogsGridItem from './BlogsGridItem';

const BlogsGrid = () => {
    const dispatch = useDispatch();
    const { blogs, isLoading, isError, error } = useSelector(
        (state) => state.blogs
    );
    const { tags, search } = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(fetchBlogs({tags,search}));
    }, [dispatch,tags,search]);
    let content;

    if (isLoading) content = <div>Loading...........</div>;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && blogs?.length === 0) {
        content = <div className="col-span-12">No Blog found!</div>;
    }

    if (!isError && !isLoading && blogs?.length > 0) {
        content = blogs.map((video) => (
            <BlogsGridItem video={video} key={video.id}/>
        ));
    }
    
  return (
    <div className='container mx-auto px-8 mt-20'>
        <div className='grid grid-cols-4 gap-5'>
            {content}
            
        </div>
    </div>
  )
}

export default BlogsGrid