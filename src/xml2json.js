function xml2json(xml) {
  // Create the return object
  let obj = {}

  if (xml.nodeType === 1) {
    // do attributes
    if (xml.attributes.length > 0) {
      obj['@attributes'] = {}
      for (let i = 0; i < xml.attributes.length; i++) {
        let attribute = xml.attributes.item(i)
        obj['@attributes'][attribute.nodeName] = attribute.nodeValue
      }
    }
  } else if (xml.nodeType === 3) {
    obj = xml.nodeValue
  }

  // do children
  if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      let item = xml.childNodes.item(i)
      let nodeName = item.nodeName
      if (typeof obj[nodeName] === 'undefined') {
        obj[nodeName] = xml2json(item)
      } else {
        if (typeof obj[nodeName].push === 'undefined') {
          let old = obj[nodeName]
          obj[nodeName] = []
          obj[nodeName].push(old)
        }
        obj[nodeName].push(xml2json(item))
      }
    }
  }

  return obj
}

export default xml2json
