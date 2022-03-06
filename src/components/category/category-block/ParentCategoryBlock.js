import Link from 'next/link';
import Image from "../../../image";
import { DEFAULT_CATEGORY_IMG_URL } from "../../../constants/urls";
import styled from 'styled-components';

const StyledProduct = styled.div`
	background: #fff;
	padding: 16px;
	overflow: hidden;
	cursor: pointer;
	&:before {
		content: '';
		pointer-events: none;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		/* background: #cae4c9; */
		background-image: linear-gradient(to right,#cae4c9 0%,#fcb69f 100%);
		z-index: 2;
		opacity: 0.5;
		transform: translateY(-100%);
		transition: all 200ms linear;
	}
	${Image} {
		transition: all 100ms linear;
		transform: scale(1);
	}
	&:hover {
		box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
		& {
			z-index: 2;
		}

		&:before {
			transform: translateY(0);
		}

		${Image} {
			transform: scale(1.2);
		}

		/* .product-title-container {
			position: absolute;
		} */
	} 
`;

const ParentCategoryBlock = (props) => {

	const { category } = props;

	return (
		<StyledProduct className="product mb-5">
			<Link href={`pastry/category/${category?.slug}`}>
				<a>
					<Image
						className="object-fill h-40 md:h-64"
						layout="fill"
						containerClassNames="w-56 h-56 m-auto"
						sourceUrl={category?.image?.sourceUrl ?? ''}
						defaultImgUrl={DEFAULT_CATEGORY_IMG_URL}
						altText={category?.image?.altText ?? category.slug}
					/>
					<div className="product-title-container p-3">
						<h3 className="product-title text-lg font-medium text-center">{category?.name}</h3>
					</div>
				</a>
			</Link>
		</StyledProduct>
	);
}

export default ParentCategoryBlock;
