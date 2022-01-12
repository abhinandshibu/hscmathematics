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
  plugins: ['docusaurus-plugin-sass'],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex, {strict: 'ignore', trust: true}],
          showLastUpdateTime: true,
          admonitions: {
            customTypes: {
              definition: {
                keyword: 'definition',
                infima: true,
                svg: '<svg width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#006591" d="M218.4 24.72c-14.2 0-30.5 3.56-49.5 11.88 77.2 8.6 65.9 91.4 14.1 106.2-65.4 18.7-131.31-23.7-98.34-99.2-39.67 18.95-42.17 80.8-12.93 111.5C141.3 227.9 56.9 279 37.25 200.7-1.929 326.2 60.34 489.5 258.7 489.5c250.7 0 282-374.7 129.2-415.04 26.5 43.04-13.1 70.94-24.9 73.14-51.3 9.9-58.1-122.89-144.6-122.88zm37.5 118.08c4.5 0 9.4 1.1 12.8 2.9l115.9 67.1c7.4 4.1 7.4 10.9 0 15.2l-115.9 66.9c-7.2 4.3-18.5 4.3-25.7 0L126.8 228c-7.3-4.3-7.3-11.1 0-15.2L243 145.7c3.4-1.8 7.9-2.9 12.9-2.9zm-89 62.6c-21.6-.4-33.1 15-18.2 24.3 9.6 4.8 23.7 4.4 32.7-.8 8.8-5.3 9.5-13.7 1.5-19.4-4.3-2.5-10-4-16-4.1zm178.6.1c-20.8.4-31.3 15.5-16.3 24.5 9.6 4.9 23.9 4.6 33-.7 8.9-5.3 9.5-13.9 1.2-19.6-4.2-2.4-9.9-4-15.9-4.2h-2zm-89 0c-6.6-.1-13 1.5-17.7 4.2-10.2 5.6-10.4 15.1-.6 20.9 9.9 5.8 25.8 5.6 35.1-.6 15-9 4.6-24.3-16.8-24.5zm-141 41c1.5.1 3.4.5 5.6 1.6l111.5 64.5c7.2 4.1 12.9 14.2 12.9 22.5v119.7c0 8.3-5.7 11.7-12.9 7.6L121.2 398c-7.4-4.3-13.2-14.2-13.2-22.6V255.7c0-6.2 3-9.2 7.5-9.2zm281.3 0c4.2 0 7.2 3 7.2 9.2v119.7c0 8.4-6 18.3-13 22.6l-111.5 64.4c-7.2 4.1-12.9.7-12.9-7.6V335.1c0-8.3 5.7-18.4 12.9-22.5L391 248.1c2.1-1.1 4.2-1.5 5.8-1.6zm-185 65.5h-1.1c-5.3.4-8.5 4.8-8.5 11.6-.6 10.4 7.2 24.1 16.9 29.8 9.8 5.6 17.6 1.1 17.2-9.9.2-14.2-13.3-31.1-24.5-31.5zm130.9 21.8c-11.2.1-24.8 17.2-24.7 31.4.1 10.4 7.7 14.4 17.2 8.9 9.4-5.5 17-18.3 17.1-28.8 0-6.7-3.3-11.1-8.5-11.5h-1.1zm-216.9 22.5c-5.4.3-8.7 4.7-8.7 11.6-.5 10.5 7.3 24.1 17 29.8 9.8 5.5 17.6 1 17.2-10.1 0-14.5-14.1-31.8-25.5-31.3z"/></svg>'
              },
            },
          },
          // showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
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
      colorMode: {
        defaultMode: 'light',
        // Dark/light switch icon options
        switchConfig: {
          // Icon for the switch while in dark mode
          darkIcon: 'light_mode',
  
          // CSS to apply to dark icon
          darkIconStyle: {
            fontFamily: 'Material Icons',
          },
  
          lightIcon: 'dark_mode',
  
          lightIconStyle: {
            fontFamily: 'Material Icons',
          },
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
