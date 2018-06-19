function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < lists.length; i++) {
    lists[i].innerHTML = parseInt(lists[i].innerHTML) + n
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let childNode = node.children[0]

  while (childNode) {
    node = childNode
    childNode = node.children[0]
  }
  return node
}
