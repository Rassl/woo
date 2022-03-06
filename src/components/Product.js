import Link from 'next/link';
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "../image";
import { DEFAULT_PRODUCT_HOME_IMG_URL } from "../constants/urls";
import styled from 'styled-components';

const StyledInfo = styled.div`
	.product-title.single {
		letter-spacing: 8.4px;
		font-size: 40px;
		padding-bottom: 8px;
		line-height: 1.3;
	}
`;

const Product = (props) => {
	const { product } = props;

	return (
		// @TODO Need to handle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			<div className="container mx-auto">
				<div className="grid grid-cols-3 gap-4 product mb-5">
					<div className="product-slider col-span-2">
						<Link href={`/product/${product?.slug}`} >
							<a>
								<Image
									className="object-cover bg-gray-100"
									width="308"
									height="308"
									loading="lazy"
									sourceUrl={product?.image?.sourceUrl ?? ''}
									defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
									altText={product?.image?.altText ?? product?.slug}
								/>
							</a>
						</Link>
					</div>

					<StyledInfo className="product-info">
						<h3 className={`product-title ${'GroupProduct' !== product.__typename ? 'single' : ''}`}>
							{product.name ? product.name : ''}
						</h3>
						<div className="product-description text-sm my-5 text-gray-700" dangerouslySetInnerHTML={{ __html: (product?.description) }} />
						<Price salesPrice={product?.price} regularPrice={product?.regularPrice} />
						<AddToCartButton product={product} />
					</StyledInfo>
				</div>
			</div>
		) : (
			''
		)
	);
};

export default Product;
