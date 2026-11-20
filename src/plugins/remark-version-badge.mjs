// Turns a paragraph that is only `*Available from SwitchBoard 1.22.0.*` into a version badge,
// so writers keep using plain Markdown and readers see a consistent label.
import { visit } from 'unist-util-visit';

const PATTERN = /^Available from SwitchBoard (\d+\.\d+(?:\.\d+)?)\.?$/;

export default function remarkVersionBadge() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent || index === undefined || node.children.length !== 1) return;
      const [child] = node.children;
      if (child.type !== 'emphasis' || child.children.length !== 1) return;
      const text = child.children[0].type === 'text' ? child.children[0].value.trim() : '';
      const match = text.match(PATTERN);
      if (!match) return;
      parent.children[index] = {
        type: 'html',
        value: `<p class="sb-since"><span class="sb-since__badge">Available from ${match[1]}</span></p>`,
      };
    });
  };
}
