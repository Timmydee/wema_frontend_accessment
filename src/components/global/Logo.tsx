import { Link } from "react-router-dom";
import xpressLogo from "../../assets/xpress.webp";

const Logo = () => (
  <div className="md:w-[143px] md:h-[30px] w-[100px] h-[24px] group">
    <Link to="/">
      <img
        src={xpressLogo}
        alt="Xpress Logo"
        width={143}
        height={30}
        className="hover:scale-105 transition-transform duration-300"
      />
    </Link>
  </div>
);

export default Logo;
