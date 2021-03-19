class TreeNode {
  constructor(path) {
    const fs = require("fs");
    this.path = path;
    this.extension = path ? `.${path.split(".").pop()}` : "N/A";
    this.fileSizeInBytes = fs.lstatSync(path).isDirectory()
      ? "-"
      : fs.statSync(path).size + " Bytes";
    this.children = [];
  }
}

module.exports = TreeNode;
