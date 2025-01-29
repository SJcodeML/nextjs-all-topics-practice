/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {  
        remotePatterns: [  
          {  
            protocol: 'https',  
            hostname: 'cdn.sanity.io', // Replace with your image host  
            port: '', // Leave blank for default  
            pathname: '/**',  
          },  
        ],  
      },
    eslint: {
        ignoreDuringBuilds: true,
      }
};

export default nextConfig;
