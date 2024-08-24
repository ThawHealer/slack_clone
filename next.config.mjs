/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [{
            // Apply these headers to all routes
            source: '/(.*)',
            headers: [{
                    key: 'X-Frame-Options',
                    value: 'DENY', // Prevents the site from being framed by others
                },
                // {
                //     key: 'Strict-Transport-Security',
                //     value: 'max-age=63072000; includeSubDomains; preload', // Forces HTTPS for 2 years
                // },
                {
                    key: 'Content-Security-Policy',
                    value: "default-src 'self'; script-src 'self'", // CSP policy
                },
                // {
                //     key: 'X-Content-Type-Options',
                //     value: 'nosniff', // Prevent MIME-type sniffing
                // },
                {
                    key: 'Referrer-Policy',
                    value: 'no-referrer', // Controls referrer information sent with requests
                },
                {
                    key: 'X-XSS-Protection',
                    value: '1; mode=block',
                },
            ],
        }, ];
    }
};

export default nextConfig;