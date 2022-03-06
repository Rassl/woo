import Layout from "../../../src/components/Layout";
import client from "../../../src/components/ApolloClient";
import Product from "../../../src/components/Product";
import {PRODUCT_BY_CATEGORY_SLUG, PRODUCT_CATEGORIES_SLUGS} from "../../../src/queries/product-by-category";
import {isEmpty} from "lodash";
import {useRouter} from "next/router";
import ReactFullpage from "@fullpage/react-fullpage";
import FullPage from "../../../src/components/full-page/full-page";
import styled from "styled-components";

const Title = styled.h3`
	position: absolute;
    width: 100%;
    text-align: center;
    z-index: 5;
    padding: 8px;
`;

export default function CategorySingle( props ) {

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const { categoryName, products } = props;

    return (
        <Layout>
            <div className="">
                {categoryName ? <Title className="text-2xl mb-5 uppercase">{categoryName}</Title> : '' }
                <div className="product-categories">
                    {/* { undefined !== products && products?.length ? (
                        products.map( product => <Product key={ product?.id } product={ product } /> )
                    ) : ''} */}
                    {products && products.length ? (
                        <FullPage products={products} />
                    ) : (
                        null
                    )}
                </div>
            </div>
        </Layout>
    )
};

export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query(({
        query: PRODUCT_BY_CATEGORY_SLUG,
        variables: { slug }
    }));

    return {
        props: {
            categoryName: data?.productCategory?.name ?? '',
            products: data?.productCategory?.products?.nodes ?? []
        },
        revalidate: 1
    }

}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_CATEGORIES_SLUGS
    })

    const pathsData = []

    data?.productCategories?.nodes && data?.productCategories?.nodes.map((productCategory) => {
        if (!isEmpty(productCategory?.slug)) {
            pathsData.push({ params: { slug: productCategory?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}
