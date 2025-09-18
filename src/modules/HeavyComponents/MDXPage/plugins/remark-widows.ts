// lib/rehype-short-words.ts
import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';

export const rehypeShortWords: Plugin<[string[]?]> =
  (extraWords = []) => {
    const defaults = [
      'в','во','и','а','но','о','с','со','к','ко','у',
      'за','над','по','из','от'
    ];
    // убираем дубли без Set
    const all = [...defaults, ...extraWords]
      .filter((w, i, arr) => arr.indexOf(w) === i);

    const rx = new RegExp(`(^|\\s)(${all.join('|')})\\s`, 'giu');
    const NBSP = '\u00A0';               // ← константа для наглядности

    return (tree) => {
      visit(tree, 'text', (node, _i, parent: any) => {
        if (
          parent &&
          ['code','inlineCode','a','pre'].includes(parent.tagName)
        ) return;

        node.value = (node.value as string)
          .replace(rx, (_, pfx: string, w: string) => `${pfx}${w}${NBSP}`);
      });
    };
  };
