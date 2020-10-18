export const htmlAmpConverter = () => {
  return function (node, vfile, next) {
    try {
      const newNode = visit(convertCode, node)
      next(null, newNode)
    } catch (err) {
      next(err)
    }
  }
}

const convertCode = (node) => {
  if (node.tagName === "img") {
    node.tagName = "amp-img"
    const width = node.properties.width
    const height = node.properties.height
    if (typeof height !== "undefined" && typeof width !== "undefined") {
      node.properties.layout = "fixed"
      return node
    } else {
      if (width) {
      }
      node.properties.layout = "fill"
      const newChildren = []
      newChildren.push(node)
      const newNode = {
        type: "element",
        tagName: "div",
        properties: {
          className: ["amp-img-container"],
          style: "height:500px;",
        },
        children: newChildren,
      }
      return newNode
    }
  } else {
    return node
  }
}

// hastの要素を訪問する関数
const visit = (visitor, node) => {
  const newNode = visitor(node)
  if (newNode.children) {
    const newChildren = []
    for (let i = 0; i < newNode.children.length; i++) {
      newChildren.push(visit(visitor, newNode.children[i]))
    }
    newNode.children = newChildren
  }
  return newNode
}
