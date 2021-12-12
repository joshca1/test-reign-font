
interface Props {
    title: string;
  }

const Header: React.FC<Props> = ({ title }) => {
return <div>{title}</div>;
};

 export default Header;