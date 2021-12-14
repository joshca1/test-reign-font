import "../styles/switch.css";
import classNames from "classnames";
interface Props {
  option: string;
  changeViewMode: (option: any) => void;
}

const PostSwitch: React.FC<Props> = ({ option, changeViewMode }) => {
  return (
    <div className="post-switch">
      <div
        onClick={() => changeViewMode("all")}
        className={classNames("post-switch-option", {
          active: option === "all",
        })}
      >
        All
      </div>
      <div
        onClick={() => changeViewMode("fav")}
        className={classNames("post-switch-option", {
          active: option === "fav",
        })}
      >
        My faves
      </div>
    </div>
  );
};

export default PostSwitch;
