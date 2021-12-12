
interface Props {
    title: string;
  }

const Header: React.FC<Props> = ({ title }) => {
return <header className="header-hacker">
        <span>{title}</span>
       </header>;
};

 export default Header;