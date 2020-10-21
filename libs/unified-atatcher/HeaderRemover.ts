export const headerRemover = () => {
  return function (node, vfile, next) {
    try {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].tagName === "h1") {
          node.children.splice(i, 1)
          next(null, node)
        }
      }

      next(null, node)
    } catch (err) {
      next(err)
    }
  }
}

// const convertCode = (node) => {
//   if (node.tagName === "h1") {
//     return null
//   } else {
//     return node
//   }
// }

// // hastの要素を訪問する関数
// const visit = (visitor, node) => {
//   const newNode = visitor(node)
//   if (newNode && newNode.children) {
//     const newChildren = []
//     for (let i = 0; i < newNode.children.length; i++) {
//       const result = visit(visitor, newNode.children[i])
//       if (result !== null) {
//         newChildren.push(result)
//       }
//     }
//     newNode.children = newChildren
//   }
//   return newNode
// }
