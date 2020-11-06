import unified from "unified"

export const headerRemover: unified.Attacher = () => {
  return function (node, vfile, next) {
    try {
      if (Array.isArray(node.children)) {
        for (let i = 0; i < node.children.length; i++) {
          if (node.children[i].tagName === "h1") {
            node.children.splice(i, 1)
            next(null, node, vfile)
          }
        }
      }
      next(null, node, vfile)
    } catch (err) {
      next(err, node, vfile)
    }
  }
}
