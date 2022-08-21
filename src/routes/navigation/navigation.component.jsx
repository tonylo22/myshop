import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../components/contexts/user.context';
import { CartContext } from '../../components/contexts/cart.context';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import './navigation.styles.scss';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isOpen, setIsOpen} = useContext(CartContext);

  const signUserOut = async () => {
    await signOutAuthUser();
  }

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">SHOP</Link>
          {
            currentUser? 
            <span className="nav-link" onClick={signUserOut} >Sign Out</span>:
            <Link className="nav-link" to="/auth">Sign In</Link>
          }
          <CartIcon onClick={toggleCart} />
        </div>
        {isOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;