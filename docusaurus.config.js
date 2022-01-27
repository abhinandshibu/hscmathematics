const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('./katex-fork.js');

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
          routeBasePath: 'docs/',
          remarkPlugins: [math],
          rehypePlugins: [katex, {trust: true}],
          showLastUpdateTime: true,
          admonitions: {
            customTypes: {
              definition: {
                keyword: 'definition',
                infima: true,
                svg: '<svg width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M218.4 24.72c-14.2 0-30.5 3.56-49.5 11.88 77.2 8.6 65.9 91.4 14.1 106.2-65.4 18.7-131.31-23.7-98.34-99.2-39.67 18.95-42.17 80.8-12.93 111.5C141.3 227.9 56.9 279 37.25 200.7-1.929 326.2 60.34 489.5 258.7 489.5c250.7 0 282-374.7 129.2-415.04 26.5 43.04-13.1 70.94-24.9 73.14-51.3 9.9-58.1-122.89-144.6-122.88zm37.5 118.08c4.5 0 9.4 1.1 12.8 2.9l115.9 67.1c7.4 4.1 7.4 10.9 0 15.2l-115.9 66.9c-7.2 4.3-18.5 4.3-25.7 0L126.8 228c-7.3-4.3-7.3-11.1 0-15.2L243 145.7c3.4-1.8 7.9-2.9 12.9-2.9zm-89 62.6c-21.6-.4-33.1 15-18.2 24.3 9.6 4.8 23.7 4.4 32.7-.8 8.8-5.3 9.5-13.7 1.5-19.4-4.3-2.5-10-4-16-4.1zm178.6.1c-20.8.4-31.3 15.5-16.3 24.5 9.6 4.9 23.9 4.6 33-.7 8.9-5.3 9.5-13.9 1.2-19.6-4.2-2.4-9.9-4-15.9-4.2h-2zm-89 0c-6.6-.1-13 1.5-17.7 4.2-10.2 5.6-10.4 15.1-.6 20.9 9.9 5.8 25.8 5.6 35.1-.6 15-9 4.6-24.3-16.8-24.5zm-141 41c1.5.1 3.4.5 5.6 1.6l111.5 64.5c7.2 4.1 12.9 14.2 12.9 22.5v119.7c0 8.3-5.7 11.7-12.9 7.6L121.2 398c-7.4-4.3-13.2-14.2-13.2-22.6V255.7c0-6.2 3-9.2 7.5-9.2zm281.3 0c4.2 0 7.2 3 7.2 9.2v119.7c0 8.4-6 18.3-13 22.6l-111.5 64.4c-7.2 4.1-12.9.7-12.9-7.6V335.1c0-8.3 5.7-18.4 12.9-22.5L391 248.1c2.1-1.1 4.2-1.5 5.8-1.6zm-185 65.5h-1.1c-5.3.4-8.5 4.8-8.5 11.6-.6 10.4 7.2 24.1 16.9 29.8 9.8 5.6 17.6 1.1 17.2-9.9.2-14.2-13.3-31.1-24.5-31.5zm130.9 21.8c-11.2.1-24.8 17.2-24.7 31.4.1 10.4 7.7 14.4 17.2 8.9 9.4-5.5 17-18.3 17.1-28.8 0-6.7-3.3-11.1-8.5-11.5h-1.1zm-216.9 22.5c-5.4.3-8.7 4.7-8.7 11.6-.5 10.5 7.3 24.1 17 29.8 9.8 5.5 17.6 1 17.2-10.1 0-14.5-14.1-31.8-25.5-31.3z"/></svg>'
              },
              hint: {
                keyword: 'hint',
                infima: true,
                svg: '<svg width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M218.4 24.72c-14.2 0-30.5 3.56-49.5 11.88 77.2 8.6 65.9 91.4 14.1 106.2-65.4 18.7-131.31-23.7-98.34-99.2-39.67 18.95-42.17 80.8-12.93 111.5C141.3 227.9 56.9 279 37.25 200.7-1.929 326.2 60.34 489.5 258.7 489.5c250.7 0 282-374.7 129.2-415.04 26.5 43.04-13.1 70.94-24.9 73.14-51.3 9.9-58.1-122.89-144.6-122.88zm37.5 118.08c4.5 0 9.4 1.1 12.8 2.9l115.9 67.1c7.4 4.1 7.4 10.9 0 15.2l-115.9 66.9c-7.2 4.3-18.5 4.3-25.7 0L126.8 228c-7.3-4.3-7.3-11.1 0-15.2L243 145.7c3.4-1.8 7.9-2.9 12.9-2.9zm-89 62.6c-21.6-.4-33.1 15-18.2 24.3 9.6 4.8 23.7 4.4 32.7-.8 8.8-5.3 9.5-13.7 1.5-19.4-4.3-2.5-10-4-16-4.1zm178.6.1c-20.8.4-31.3 15.5-16.3 24.5 9.6 4.9 23.9 4.6 33-.7 8.9-5.3 9.5-13.9 1.2-19.6-4.2-2.4-9.9-4-15.9-4.2h-2zm-89 0c-6.6-.1-13 1.5-17.7 4.2-10.2 5.6-10.4 15.1-.6 20.9 9.9 5.8 25.8 5.6 35.1-.6 15-9 4.6-24.3-16.8-24.5zm-141 41c1.5.1 3.4.5 5.6 1.6l111.5 64.5c7.2 4.1 12.9 14.2 12.9 22.5v119.7c0 8.3-5.7 11.7-12.9 7.6L121.2 398c-7.4-4.3-13.2-14.2-13.2-22.6V255.7c0-6.2 3-9.2 7.5-9.2zm281.3 0c4.2 0 7.2 3 7.2 9.2v119.7c0 8.4-6 18.3-13 22.6l-111.5 64.4c-7.2 4.1-12.9.7-12.9-7.6V335.1c0-8.3 5.7-18.4 12.9-22.5L391 248.1c2.1-1.1 4.2-1.5 5.8-1.6zm-185 65.5h-1.1c-5.3.4-8.5 4.8-8.5 11.6-.6 10.4 7.2 24.1 16.9 29.8 9.8 5.6 17.6 1.1 17.2-9.9.2-14.2-13.3-31.1-24.5-31.5zm130.9 21.8c-11.2.1-24.8 17.2-24.7 31.4.1 10.4 7.7 14.4 17.2 8.9 9.4-5.5 17-18.3 17.1-28.8 0-6.7-3.3-11.1-8.5-11.5h-1.1zm-216.9 22.5c-5.4.3-8.7 4.7-8.7 11.6-.5 10.5 7.3 24.1 17 29.8 9.8 5.5 17.6 1 17.2-10.1 0-14.5-14.1-31.8-25.5-31.3z"/></svg>'
              },
              answer: {
                keyword: 'answer',
                infima: true,
                svg: '<svg width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M218.4 24.72c-14.2 0-30.5 3.56-49.5 11.88 77.2 8.6 65.9 91.4 14.1 106.2-65.4 18.7-131.31-23.7-98.34-99.2-39.67 18.95-42.17 80.8-12.93 111.5C141.3 227.9 56.9 279 37.25 200.7-1.929 326.2 60.34 489.5 258.7 489.5c250.7 0 282-374.7 129.2-415.04 26.5 43.04-13.1 70.94-24.9 73.14-51.3 9.9-58.1-122.89-144.6-122.88zm37.5 118.08c4.5 0 9.4 1.1 12.8 2.9l115.9 67.1c7.4 4.1 7.4 10.9 0 15.2l-115.9 66.9c-7.2 4.3-18.5 4.3-25.7 0L126.8 228c-7.3-4.3-7.3-11.1 0-15.2L243 145.7c3.4-1.8 7.9-2.9 12.9-2.9zm-89 62.6c-21.6-.4-33.1 15-18.2 24.3 9.6 4.8 23.7 4.4 32.7-.8 8.8-5.3 9.5-13.7 1.5-19.4-4.3-2.5-10-4-16-4.1zm178.6.1c-20.8.4-31.3 15.5-16.3 24.5 9.6 4.9 23.9 4.6 33-.7 8.9-5.3 9.5-13.9 1.2-19.6-4.2-2.4-9.9-4-15.9-4.2h-2zm-89 0c-6.6-.1-13 1.5-17.7 4.2-10.2 5.6-10.4 15.1-.6 20.9 9.9 5.8 25.8 5.6 35.1-.6 15-9 4.6-24.3-16.8-24.5zm-141 41c1.5.1 3.4.5 5.6 1.6l111.5 64.5c7.2 4.1 12.9 14.2 12.9 22.5v119.7c0 8.3-5.7 11.7-12.9 7.6L121.2 398c-7.4-4.3-13.2-14.2-13.2-22.6V255.7c0-6.2 3-9.2 7.5-9.2zm281.3 0c4.2 0 7.2 3 7.2 9.2v119.7c0 8.4-6 18.3-13 22.6l-111.5 64.4c-7.2 4.1-12.9.7-12.9-7.6V335.1c0-8.3 5.7-18.4 12.9-22.5L391 248.1c2.1-1.1 4.2-1.5 5.8-1.6zm-185 65.5h-1.1c-5.3.4-8.5 4.8-8.5 11.6-.6 10.4 7.2 24.1 16.9 29.8 9.8 5.6 17.6 1.1 17.2-9.9.2-14.2-13.3-31.1-24.5-31.5zm130.9 21.8c-11.2.1-24.8 17.2-24.7 31.4.1 10.4 7.7 14.4 17.2 8.9 9.4-5.5 17-18.3 17.1-28.8 0-6.7-3.3-11.1-8.5-11.5h-1.1zm-216.9 22.5c-5.4.3-8.7 4.7-8.7 11.6-.5 10.5 7.3 24.1 17 29.8 9.8 5.5 17.6 1 17.2-10.1 0-14.5-14.1-31.8-25.5-31.3z"/></svg>'
              },
            },
          },
          // showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        blog: {
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        }
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
            docId: 'standard1/index',
            position: 'left',
            label: 'Standard 1',
          },
          {
            type: 'doc',
            docId: 'standard2/index',
            position: 'left',
            label: 'Standard 2',
          },
          // {
          //   type: 'dropdown',
          //   position: 'left',
          //   label: 'Standard',
          //   items: [
          //     {
          //       type: 'doc',
          //       docId: 'standard1/index',
          //       label: 'Standard 1',
          //     },
          //     {
          //       type: 'doc',
          //       docId: 'standard2/index',
          //       label: 'Standard 2',
          //     }
          //   ]
          // },
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
          {
            to: 'blog',
            label: 'Blog',
            position: 'right',
          },
          // {
          //   href: 'mailto:contact@mail.com',
          //   label: 'Contact',
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
                label: 'Standard 1',
                to: '/standard1/',
              },
              {
                label: 'Standard 2',
                to: '/standard2/',
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
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                html: `
                <a href="mailto:contact@hscmathematics.com" style="color:#FFFFFF"
                  onmouseover="this.style.color='#543391';"
                  onmouseout="this.style.color='#FFFFFF';">
                  Contact
                  <svg width="18.5" height="18.5" version="1.1" viewBox="0 -100 1200 1100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m1068 985.32c-12 5.8789-24 14.398-24 25.922 0 11.52 17.281 21.719 39.719 13.68 1.9805-0.60547 3.9062-1.3672 5.7617-2.2812 21.047-9.1875 38.707-24.707 50.52-44.402 11.336-19.492 16.949-41.781 16.199-64.316l2.4023-109.92 5.3984-220.08 3.9609-220.08 0.83984-55.078v-28.445c-0.19531-13.035-2.4648-25.957-6.7227-38.281-8.5781-25.004-24.754-46.707-46.27-62.066-21.516-15.363-47.293-23.617-73.73-23.613-294-3.7188-585.72-5.8789-881.76-5.5195h0.003906c-27.711 0.92578-54.445 10.457-76.488 27.277-22.043 16.816-38.301 40.082-46.512 66.562-3.8633 13.051-5.8438 26.59-5.8789 40.199v82.559l1.4375 220.56 1.8008 219.6 1.3203 110.04c-0.60547 25.973 6.5391 51.539 20.52 73.438 21.832 33.852 58.441 55.316 98.641 57.844 14.641 0.71875 19.801 0 30.238 0l54.602-0.84375 110.04-1.8008 220.08-4.0781 440.4-10.199c18.238 0 32.762-9.4805 32.762-20.641s-14.52-20.281-32.762-20.762h-5.1602l-439.92-10.32-220.08-4.0781-110.04-1.6797-55.32-1.0781h-13.68c-2.957 0.23438-5.9258 0.23438-8.8789 0-4.1758-0.71875-8.2188-2.0547-12-3.9609 108.68-91.363 203.69-197.85 282.12-316.2l4.8008 5.0391 30 30.961c11.047 11.918 22.789 23.18 35.16 33.719 30.672 24.141 68.641 37.137 107.67 36.852 39.035-0.28516 76.809-13.828 107.13-38.41 16.199-14.039 24-22.922 34.32-33.48l30.121-30.961 3.3594-3.6016c81.609 123.1 181.15 233.31 295.32 327-2.4531 1.8633-5.0625 3.5117-7.8008 4.9219zm-952.32-63.602v-9.1211l1.1992-110.04 1.9219-220.08 1.1992-220.2v-43.441c63.719 72 127.68 144 193.32 214.2l73.078 76.801c-104.34 90.824-195.47 195.8-270.72 311.88zm598.8-324-30.48 29.762c-8.7227 9.0547-17.895 17.664-27.48 25.801-15.199 11.477-33.754 17.633-52.801 17.52-19.035-0.21484-37.48-6.6172-52.559-18.242-5.8789-4.5586-18-16.801-27.84-26.398l-31.32-30-125.64-119.04c-78.48-73.199-158.24-145.2-239.28-216 4.0625-6.8125 9.9141-12.379 16.914-16.102 7.0039-3.7266 14.891-5.4609 22.809-5.0195 292.8 0 588.72-2.0391 878.76-5.6406h-0.003906c16.102 0.40234 31.043 8.4727 40.203 21.719-83.281 72.723-165.2 146.8-245.76 222.24zm106.92 12 74.398-78.238c67.801-72 133.92-146.4 199.56-220.8v2.8789l0.83984 54.961 4.0781 220.08 4.6797 220.08 2.6406 109.92 0.003906 0.003906c0.50781 7.7656-0.34375 15.562-2.5234 23.039-77.676-123.95-173.27-235.72-283.68-331.68z" fill="currentColor"/>
                  </svg>
                </a>
                `,
              },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
            ],
          },
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
