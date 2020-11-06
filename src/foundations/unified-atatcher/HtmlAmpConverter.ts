import unified from "unified"
import { Node } from "unist"

export const htmlAmpConverter: unified.Attacher = () => {
  return function (node, vfile, next) {
    try {
      const newNode = visit(convertCode, node)
      next(null, newNode, vfile)
    } catch (err) {
      next(err, node, vfile)
    }
  }
}
type PropertiesWithHeightAndWidth = {
  width: string
  height: string
  layout?: string
}

const hasHeightAndWidth = (p: any): p is PropertiesWithHeightAndWidth => {
  if (
    typeof p === "object" &&
    typeof p.width === "string" &&
    typeof p.height === "string"
  ) {
    return true
  } else {
    return false
  }
}

const convertCode = (node: Node) => {
  if (node.tagName !== "img") {
    return node
  }

  node.tagName = "amp-img"
  if (hasHeightAndWidth(node.properties)) {
    node.properties.layout = "fixed"
    return node
  } else {
    ;(node.properties as any).layout = "fill"
    const newChildren: Node[] = []
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
}

// hastの要素を訪問する関数
const visit = (visitor: (node: Node) => Node, node: Node) => {
  const newNode = visitor(node)
  if (Array.isArray(newNode.children)) {
    const newChildren = []
    for (let i = 0; i < newNode.children.length; i++) {
      newChildren.push(visit(visitor, newNode.children[i]))
    }
    newNode.children = newChildren
  }
  return newNode
}
