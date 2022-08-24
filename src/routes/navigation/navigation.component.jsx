import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../components/contexts/user.context';
import { CartContext } from '../../components/contexts/cart.context';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from './navigation.styles';

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
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {
            currentUser? 
            <NavLink as='span' onClick={signUserOut} >Sign Out</NavLink>:
            <NavLink to="/auth">Sign In</NavLink>
          }
          <CartIcon onClick={toggleCart} />
        </NavLinksContainer>
        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;