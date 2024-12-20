module.exports = {
  siteUrl: 'https://chat-boty.com',
  sitemapSize: 7000, // размер страниц в sitemap, если больше, создаются дополнительные файлы
  changefreq: 'daily', // частота обновления страниц
  priority: 0.7, // приоритет страниц
  exclude: ['/admin/*', '/_api/*', '/admin_login'], // страницы, которые будут исключены из sitemap
  additionalPaths: async (config) => [
    await config.transform(config, '/blog'), // Явное добавление /blog в sitemap
  ],
}
