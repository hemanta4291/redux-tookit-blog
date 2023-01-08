import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tagRemoved, tagSelected } from '../features/filter/FilterSlice';
import { fetchTags } from '../features/Tags/TagsSlice'

const Tag = ({title}) => {
  const dispatch = useDispatch();
    const { tags: selectedTags } = useSelector((state) => state.filter);

    const isSelected = selectedTags.includes(title) ? true : false;

    const style = isSelected
        ? "py-2 px-4 border-2 rounded-full bg-black text-white cursor-pointer"
        : "py-2 px-4 border-2 rounded-full bg-slate-100 text-black cursor-pointer";

    const handleSelect = () => {
        if (isSelected) {
            dispatch(tagRemoved(title));
        } else {
            dispatch(tagSelected(title));
        }
    };

  return (
    <div className={style} onClick={handleSelect}>{title}
    </div>
   
  )
}

export default Tag