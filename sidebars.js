/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  standard1Sidebar: [{type: 'autogenerated', dirName: 'standard1'}],
  standard2Sidebar: [{type: 'autogenerated', dirName: 'standard2'}],
  advancedSidebar: [{type: 'autogenerated', dirName: 'advanced' }],
  extension1Sidebar: [{type: 'autogenerated', dirName: 'extension1' }],
  extension2Sidebar: [{type: 'autogenerated', dirName: 'extension2' }],
  latexSidebar: [{type: 'autogenerated', dirName: 'latex' }],

  // But you can create a sidebar manually
  /*
  standardSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['standard/intro'],
    },
  ],
   */
};
