/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
      },
      images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kxxclxmmdkyrcsvsptqp.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/website/**',
            },
        ],
    },
};

export default nextConfig;
