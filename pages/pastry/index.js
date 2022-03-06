import Layout from "../../src/components/Layout";
import Product from "../../src/components/Product";
import client from '../../src/components/ApolloClient';
import ParentCategoriesBlock from "../../src/components/category/category-block/ParentCategoriesBlock";
import PRODUCTS_AND_CATEGORIES_QUERY from "../../src/queries/product-and-categories";
import HeroCarousel from "../../src/components/home/hero-carousel";
import Section from '../../src/components/Section/section';
import styled from "styled-components";
import ladure from '../../src/img/ladure.jpg';
import cake from '../../src/img/cake-3.png';
import macaroon from '../../src/img/macaroon.png';
import blueberry from '../../src/img/blueberry.png';
import strawberry from '../../src/img/strawberry.png';
import love from '../../src/img/cook_wit_love.png';
import Image from "../../src/image";
import { DEFAULT_CATEGORY_IMG_URL } from "../../src/constants/urls";
import Plx from "react-plx/lib/Plx";

const Top = styled.div`
	position: relative;
	height: 700px;
	background: #fdfbf6;
	  .bgWrap {
        height: 100%;
        width: 100%;
        z-index: -1;
		img {
			clip-path: ellipse(100% 55% at 48% 44%);
		}
        &:after {
			content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: linear-gradient(to right,#cae4c9 0%,#fcb69f 100%);
			clip-path: ellipse(100% 55% at 48% 44%);
        }
  }
  .center-image {
	  right: 5%;
	  position: absolute;
	  top: 10%;
	  /* transform: translateX(-50%) translateY(0%); */
  }

  .top-text {
	  left: 10%;
	  position: absolute;
	  top: 100px;
	  color: #fff;
	  z-index: 2;
	  text-transform: uppercase;
	  text-shadow: 0px 0px 8px rgba(150, 150, 150, 1);
	  /* font-family: 'Arizonia', cursive; */
	  font-size: 120px;
  }

  .left-image {
	  left: 40%;
	  position: absolute;
	  bottom: 0;
	  z-index: 3;
	  transform: translateX(-75%) translateY(0%);
  }

  .top-left-image {
	  left: 10%;
	  position: absolute;
	  top: 0;
	  z-index: 1;
	  transform: translateY(10%);
  }

  .top-center-image {
	  left: 15%;
	  position: absolute;
	  top: 250px;
	  z-index: 3;
	  /* transform: translateY(10%); */
  }
`;

const ProductsWrapper = styled.div`
	background: #fdfbf6;
  ;`

const Bottom = styled.div`
	position: relative;
	height: 300px;
	background: #fdfbf6;
	&:before {
		content: "Lylly's pastry";
		position: absolute;
		left: 0;
		color: #fff;
		right: 0;
		bottom: 0;
		top: 0;
		background-image: linear-gradient(to right,#cae4c9 0%,#fcb69f 100%);
		clip-path: ellipse(100% 55% at 48% 100%);
	}

	.bottom-image {
		position: absolute;
		left: 50%;
		bottom: 10px;
		transform: translateX(-50%);
	}
  }
`;

const parallaxData = [
	{
		start: 0,
		end: 500,
		properties: [
			{
				startValue: 0,
				endValue: -100,
				property: "translateX"
			},
		],
	},
];

const parallaxDataX = [
	{
		start: 0,
		end: 500,
		properties: [
			{
				startValue: 0,
				endValue: -80,
				property: "translateY"
			},
			{
				startValue: 1,
				endValue: 2,
				property: "scale"
			},
		],
	},
];

const parallaxDataB = [
	{
		start: 0,
		end: 800,
		properties: [
			{
				startValue: 0,
				endValue: 400,
				property: "translateY"
			},
		],
	},
];

const parallaxDataS = [
	{
		start: 0,
		end: 600,
		properties: [
			{
				startValue: 0,
				endValue: 200,
				property: "translateY"
			},
			{
				startValue: 0,
				endValue: 260,
				property: "rotateZ"
			},
		],
	},
];

export default function Home(props) {

	const { products, productCategories, heroCarousel } = props || {};

	return (
		<Layout>
			<Top>
				<div className={'bgWrap'}>
					{/* <Image
						className="object-cover h-40 md:h-64"
						layout="fill"
						containerClassNames="w-96 h-full"
						sourceUrl={ladure}
						defaultImgUrl={DEFAULT_CATEGORY_IMG_URL}
						altText={''}
					/> */}
				</div>
				<div className="top-text">Lully's pastry</div>
				<div className="center-image">
					<Plx
						className='MyAwesomeParallax'
						parallaxData={parallaxData}
					>
						<Image
							sourceUrl={cake}
							alt="Picture of the author"
							width={856}
							height={520}
						/>
					</Plx>
				</div>
				<div className="left-image">
					<Plx
						className='MyAwesomeParallax'
						parallaxData={parallaxDataX}
					>
						<Image
							sourceUrl={macaroon}
							alt="Picture of the author"
							width={350}
							height={350}
						/>
					</Plx>
				</div>
				<div className="top-center-image">
					<Plx
						className='MyAwesomeParallax'
						parallaxData={parallaxDataS}
					>
						<Image
							sourceUrl={strawberry}
							alt="Picture of the author"
							width={200}
							height={200}
						/>
					</Plx>
				</div>
				<div className="top-left-image">
					<Plx
						className='MyAwesomeParallax'
						parallaxData={parallaxDataB}
					>
						<Image
							sourceUrl={blueberry}
							alt="Picture of the author"
							width={200}
							height={200}
						/>
					</Plx>
				</div>

			</Top>
			<ProductsWrapper>
				<div className="product-categories-container container mx-auto px-4 xl:px-0">
					<div className="main-title py-6 uppercase"><span className="main-title-inner">Categories</span></div>
					<ParentCategoriesBlock productCategories={productCategories} />
				</div>
			</ProductsWrapper>
			<Bottom>
				<div className="bottom-image">
					<Image
						sourceUrl={love}
						alt="Picture of the author"
						width={256}
						height={125}
					/>
				</div>
			</Bottom>
			<HeroCarousel heroCarousel={heroCarousel} />
		</Layout>
	)
};

export async function getStaticProps() {

	const { data } = await client.query({
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	});

	return {
		props: {
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};
