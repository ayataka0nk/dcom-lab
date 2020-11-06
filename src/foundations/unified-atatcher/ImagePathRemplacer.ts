const convertCode = (node, dirName) => {
  if (node.tagName === "img") {
    let src: string = node.properties.src
    if (src.slice(0, 2) === "./") {
      src = src.slice(2)
    }
    src = src.replace("images/", "/articleImages/" + dirName + "/")
    node.properties.src = src
    return node
  } else {
    return node
  }
}

export const makeImagePathReplacer = (dirName: string) => {
  return () => {
    return (node, vfile, next) => {
      try {
        const newNode = visit(convertCode, node, dirName)
        next(null, newNode)
      } catch (err) {
        next(err)
      }
    }
  }
}

// hastの要素を訪問する関数
function visit(visitor, node, dirName) {
  const newNode = visitor(node, dirName)
  if (newNode.children) {
    const newChildren = []
    for (let i = 0; i < newNode.children.length; i++) {
      newChildren.push(visit(visitor, newNode.children[i], dirName))
    }
    newNode.children = newChildren
  }
  return newNode
}
