/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
            // {
            //     protocol: 'https',
            //     hostname: 'anitrendz.net',
            //     port: '',
            //     pathname: '/**',
            // },
            // {
            //     protocol: 'https',
            //     hostname: 't4.ftcdn.net',
            //     port: '',
            //     pathname: '/**',
            // },
        ],
    },
}

module.exports = nextConfig
