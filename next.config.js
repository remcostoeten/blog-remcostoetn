const { withHydrationOverlay } = require("@builder.io/react-hydration-overlay/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com', 'cdn.builder.io', 'cdn.dribbble.com', 'dribbble.com'],
    },
};

if (process.env.NODE_ENV === 'development') {
    module.exports = withHydrationOverlay({
        /**
         * Optional: `appRootSelector` is the selector for the root element of your app. By default, it is `#__next` which works
         * for Next.js apps with pages directory. If you are using the app directory, you should change this to `main`.
         */
        appRootSelector: "main",
    })(nextConfig);
} else {
    module.exports = nextConfig;
}