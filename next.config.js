/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    trailingSlash: true,
    images: {
        unoptimized: true,
        domains: [
            "res.cloudinary.com",
            "github.com",
            "br.freepik.com",
            "localhost",
            "imolandserver.herokuapp.com",
        ],
    },
};

module.exports = nextConfig;
