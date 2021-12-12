import '../styles/switch.css';

interface Props {
  }



const PostSwitch: React.FC<Props> = () => {
return <div className="post-switch">
     <div className="post-switch-option  ">All</div>
     <div className="post-switch-option  ">My faves</div>
</div>;
};

export default PostSwitch;