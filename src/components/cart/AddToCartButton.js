import {useState, useContext} from "react";
import {useQuery, useMutation} from '@apollo/client';
import Link from "next/link";
import {v4} from 'uuid';
import cx from 'classnames';

import {AppContext} from "../context/AppContext";
import {getFormattedCart} from "../../functions";
import GET_CART from "../../queries/get-cart";
import ADD_TO_CART from "../../mutations/add-to-cart";
import styled from "styled-components";

const StyledButton = styled.button`
    position: relative;
    color: #fff;
    z-index: 2;
    line-height: 40px;
    padding: 0;
    width: 160px;
    height: 40px;
    padding: 10px 25px;
    border: 2px solid #fff;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    &:focus {
        outline: none;
    }
    box-sizing: content-box;
    font-size: 20px;
    &:hover{
    border: 2px solid transparent;
    }
    &:before,
    &:after {
    position: absolute;
    content: "";
    width: 0%;
    height: 0%;
    border: 2px solid;
    z-index: -1;
    transition: all 0.3s ease;
    }
    &:before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #fff;
    border-left-color: #fff;
    }
    &:after{
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #fff;
    border-right-color: #fff;
    }
    &:hover:before,
    &:hover:after {
        border-color: #fff;
        height: 100%;
        width: 100%;
    }
`;

const AddToCart = (props) => {

    const {product} = props;

    const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
    };

    const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowViewCart] = useState(false);
    const [requestError, setRequestError] = useState(null);

        // Get Cart Data.
    const {data, refetch} = useQuery(GET_CART, {
            notifyOnNetworkStatusChange: true,
            onCompleted: () => {

                // Update cart in the localStorage.
                const updatedCart = getFormattedCart(data);
                localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

                // Update cart data in React Context.
                setCart(updatedCart);
            }
        });

    // Add to Cart Mutation.
    const [addToCart, {
        data: addToCartRes,
        loading: addToCartLoading,
        error: addToCartError
    }] = useMutation(ADD_TO_CART, {
        variables: {
            input: productQryInput,
        },
        onCompleted: () => {
            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            refetch();

            // 2. Show View Cart Button
            setShowViewCart(true)
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    });

    const handleAddToCartClick = async () => {
        setRequestError(null);
        await addToCart();
    };

    return (
        <div>
            {/*	Check if its an external product then put its external buy link */}
            {"ExternalProduct" === product.__typename ? (
                    <a href={product?.externalUrl ?? '/'} target="_blank"
                       className="px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600">
						Buy now
                    </a>
                ) :
                <StyledButton
					disabled={addToCartLoading}
                    onClick={handleAddToCartClick}
                >
					{ addToCartLoading ? 'Adding to cart...' : 'Add to cart' }
                </StyledButton>
            }
            {showViewCart ? (
                <Link href="/cart">
                    <StyledButton>
                        View Cart
                    </StyledButton>
                </Link>
            ) : ''}
        </div>
    );
};

export default AddToCart;
