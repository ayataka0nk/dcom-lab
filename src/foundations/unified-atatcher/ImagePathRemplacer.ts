import { Node } from "unist"
import unified from "unified"

export const makeImagePathReplacer: (dirName: string) => unified.Attacher = (
  dirName: string
) => {
  return () => {
    return (node, vfile, next) => {
      try {
        const newNode = visit(convertCode, node, dirName)
        next(null, newNode, vfile)
      } catch (err) {
        next(err, node, vfile)
      }
    }
  }
}

const hasSrcProperties = (p: any): p is { src: string } => {
  if (typeof p === "object" && typeof p.src === "string") {
    return true
  } else {
    return false
  }
}

const convertCode = (node: Node, dirName: string) => {
  if (node.tagName !== "img") {
    return node
  }
  if (hasSrcProperties(node.properties)) {
    let src: string = node.properties.src
    if (src.slice(0, 2) === "./") {
      src = src.slice(2)
    }
    src = src.replace("images/", "/posts/" + dirName + "/images/")
    node.properties.src = src
    return node
  }
}

// hastの要素を訪問する関数
function visit(
  visitor: (node: Node, dirName: string) => Node,
  node: Node,
  dirName: string
) {
  const newNode = visitor(node, dirName)
  if (Array.isArray(newNode.children)) {
    const newChildren = []
    for (let i = 0; i < newNode.children.length; i++) {
      newChildren.push(visit(visitor, newNode.children[i], dirName))
    }
    newNode.children = newChildren
  }
  return newNode
}
