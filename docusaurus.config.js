const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('./katex-fork.js');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'HSC Mathematics',
  tagline: 'Updated Regularly',
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
          rehypePlugins: [katex, {trust: true}],
          showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        blog: {
          blogTitle: 'Website blog!',
          blogDescription: 'For updates',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          remarkPlugins: [math],
          rehypePlugins: [katex, { strict: false }],
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
          {
            type: 'doc',
            docId: 'latex/index',
            position: 'right',
            label: 'LaTeX',
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          // {
          //   to: 'blog',
          //   label: 'Blog',
          //   position: 'right',
          // },
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
              {
                label: 'LaTeX',
                to: '/latex',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
            ],
          },
        ],
        // copyright: `?? ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      // colorMode: {
      //   defaultMode: 'light',
      //   // Dark/light switch icon options
      //   switchConfig: {
      //     // Icon for the switch while in dark mode
      //     darkIcon: 'light_mode',
  
      //     // CSS to apply to dark icon
      //     darkIconStyle: {
      //       fontFamily: 'Material Icons',
      //     },
  
      //     lightIcon: 'dark_mode',
  
      //     lightIconStyle: {
      //       fontFamily: 'Material Icons',
      //     },
      //   },
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['latex'],
      },
    }),
});
