import { useEffect, useRef, FC } from "react";

import "./cart-dropdown.styles";
import Button from "../button/button.component";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { CartItem, selectCartItems } from "../../store/cart/cart.slice";
import CartItemCard from "../cart-item/cart-item-card.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { LeafButton } from "../button/button.styles";

type CartDropdownProps = {
  closeClickHandler: () => void;
};

const CartDropdown: FC<CartDropdownProps> = ({ closeClickHandler }) => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    closeClickHandler();
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem: CartItem) => (
            <CartItemCard
              cartItem={cartItem}
              key={cartItem.title + " cart " + cartItem.printType.size}
            />
          ))
        ) : (
          <EmptyMessage>No items in cart</EmptyMessage>
        )}
      </CartItems>

      <LeafButton onClick={goToCheckoutHandler}>Checkout</LeafButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
