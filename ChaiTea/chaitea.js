// Lifted from http://cwestblog.com/2014/03/14/javascript-getting-all-text-nodes/
function getTextNodesIn(elem, opt_fnFilter) {
  var textNodes = [];
  if (elem) {
    for (var nodes = elem.childNodes, i = nodes.length; i--;) {
      var node = nodes[i], nodeType = node.nodeType;
      if (nodeType == 3) {
        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
          textNodes.push(node);
        }
      }
      else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
        textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
      }
    }
  }
  return textNodes;
}

getTextNodesIn(document.body, function(textNode, parent) {
  if (/(chai)\s+tea\b/ig.test(textNode.nodeValue)) {
    textNode.nodeValue = textNode.nodeValue.replace(/(chai)\s+tea\b/ig, '$1');
  }
});
