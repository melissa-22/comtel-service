import logo from '../../../assets/logo.png';
import {Link} from "react-router-dom";
import {FC} from "react";
interface LogoProps {
    onClick?: () => void;
}
const Logo: FC<LogoProps> = ({onClick}) => {
    return (
        <Link onClick={onClick} to='/'>
            <img src={logo} alt="Логотип"/>
        </Link>
    );
};

export default Logo;