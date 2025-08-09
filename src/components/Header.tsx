import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import ToogleSidebar from "./ui/toogle-sidebar";

const Header = () => {
  return (
    <header className="flex justify-between sm:justify-around border">
      <div className="flex gap-5 items-center">
        <div>
          <Link to="/">
            <img
              src="/images/staticLogo.png"
              alt="Static Logo"
              className="w-12"
            />
          </Link>
        </div>
        <ToogleSidebar />
        <div className="hidden sm:flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/items">Items</Link>
        </div>
      </div>
      <div className="hidden items-center sm:flex w-2xs">
        <Input type="search" placeholder="Search items..." />
      </div>
      <div className="flex gap-5 items-center">
        <Link to="/cart" className="px-5">
          <ShoppingCart />
        </Link>
        <div className="hidden sm:block">Leynard</div>
      </div>
    </header>
  );
};

export default Header;
