const TreeNode = require("./TreeNode");
const buildTree = (rootPath) => {
  const fs = require("fs");
  const root = new TreeNode(rootPath);

  const stack = [root];

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode) {
      const children = fs.readdirSync(currentNode.path);

      for (let child of children) {
        const childPath = `${currentNode.path}/${child}`;
        const childNode = new TreeNode(childPath);
        currentNode.children.push(childNode);

        if (fs.statSync(childNode.path).isDirectory()) {
          stack.push(childNode);
        }
      }
    }
  }

  return root;
};

module.exports = { buildTree };
