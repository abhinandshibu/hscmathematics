const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'HSC Mathematics',
  tagline: 'Updated Weekly',
  url: 'https://www.hscmathematics.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // favicon: 'img/favicon.ico',
  organizationName: 'claytonpollard', // Usually your GitHub org/user name.
  projectName: 'mathematics-website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex, {trust: true}],
          showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
        integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
        crossorigin: "anonymous",
    },
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'HSC Mathematics',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'standard/syllabus/y11',
            position: 'left',
            label: 'Standard',
          },
          {
            type: 'doc',
            docId: 'advanced/index',
            position: 'left',
            label: 'Advanced',
          },
          {
            type: 'doc',
            docId: 'extension1/index',
            position: 'left',
            label: 'Extension 1',
          },
          {
            type: 'doc',
            docId: 'extension2/index',
            position: 'left',
            label: 'Extension 2',
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mathematics',
            items: [
              {
                label: 'Standard',
                to: 'standard/syllabus/y11',
              },
              {
                label: 'Advanced',
                to: '/advanced/',
              },
              {
                label: 'Extension 1',
                to: '/extension1/',
              },
              {
                label: 'Extension 2',
                to: '/extension2/',
              },
            ],
          },
          {
            title: 'Useful Sites',
            items: [
              {
                label: 'Practice papers',
                href: 'https://thsconline.github.io',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        // copyright: `© ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
