/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://divernotes.com/',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}