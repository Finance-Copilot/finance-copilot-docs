import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Finance Copilot',
  tagline: 'AI-Powered Personal Finance Platform',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Github Pages URL
  url: 'https://finance-copilot.github.io',

  // repo name
  baseUrl: '/finance-copilot-docs/',

  organizationName: 'Finance-Copilot',
  projectName: 'finance-copilot-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',

          editUrl:
            'https://github.com/Finance-Copilot/finance-copilot-docs/tree/main/',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Finance Copilot',

      logo: {
        alt: 'Finance Copilot',
        src: 'img/logo.svg',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },

        {
          href: 'https://github.com/Finance-Copilot/finance-copilot-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Product Overview',
              to: '/docs/01-product-overview',
            },
          ],
        },

        {
          title: 'Repository',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Finance-Copilot/finance-copilot-docs',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Finance Copilot`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;