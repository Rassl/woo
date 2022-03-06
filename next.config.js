const path = require("path");
const withImages = require('next-images')
const allowedImageWordPressDomain = new URL('http://127.0.0.1/wordpress').hostname

module.exports = {
    trailingSlash: true,
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };

        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    /**
     * We specify which domains are allowed to be optimized.
     * This is needed to ensure that external urls can't be abused.
     * @see https://nextjs.org/docs/basic-features/image-optimization#domains
     */
    images: {
        withImages,
        domains: [ allowedImageWordPressDomain, 'via.placeholder.com' ],
    },
};
