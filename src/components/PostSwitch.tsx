import '../styles/switch.css';
import { useState } from 'react';
import classNames from "classnames"


const PostSwitch: React.FC = () => {
  const [option, setOption] = useState<String>('all');

  return <div className="post-switch">
    <div onClick={()=>setOption('all')} className={classNames('post-switch-option', {'active': option==='all'})} >All</div>
      <div onClick={()=>setOption('fav')} className={classNames('post-switch-option', {'active': option==='fav'})}>My faves</div>
  </div>;
};

export default PostSwitch;