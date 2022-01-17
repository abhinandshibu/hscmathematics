const visit = require('unist-util-visit');
const katex = require('katex');
const unified = require('unified');
const parse = require('rehype-parse');
const toText = require('hast-util-to-text');
require('katex/dist/contrib/mhchem');

module.exports = rehypeKatex;

const parseHtml = unified().use(parse, { fragment: true, position: false });

const source = 'rehype-katex';

function rehypeKatex(options) {
  const settings = options || {};
  const throwOnError = settings.throwOnError || false;

  return transformMath;

  function transformMath(tree, file) {
    visit(tree, 'element', onelement);

    function onelement(element) {
      const classes = element.properties.className || [];
      const inline = classes.includes('math-inline');
      const displayMode = classes.includes('math-display');

      if (!inline && !displayMode) {
        return;
      }

      const value = toText(element);

      let result = '';

      try {
        result = katex.renderToString(value, { ...settings, trust: true, displayMode, throwOnError: true });
      } catch (error) {
        const fn = throwOnError ? 'fail' : 'message';
        const origin = [source, error.name.toLowerCase()].join(':');

        file[fn](error.message, element.position, origin);

        result = katex.renderToString(value, {
          ...settings,
          trust: true,
          displayMode,
          throwOnError: false,
        });
      }

      element.children = parseHtml.parse(result).children;
    }
  }
}