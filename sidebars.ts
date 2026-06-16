import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars = {
  docsSidebar: [
    '01-product-overview',
    '02-business-requirement',
    '03-user-journey',
    '04-architecture',
    '05-rbac',
    '06-database-design',
    '07-api-design',
    '08-dashboard-specification',
    '09-forecast-specification',
    '10-ai-summary-specification',
    '11-roadmap',
    '12-release-plan',
    '13-non-functional-requirement',
  ],
};

export default sidebars;
