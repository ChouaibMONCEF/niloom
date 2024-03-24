export const reorder = (data, movedItem, destination, newIndex) => {
  let result = data
  let newOrder = 1
  let isPassed = false
  for (let i = 0; i < result.length; i++) {
    if (result[i].status == destination) {
      if (result[i].id != movedItem) {
        if (newOrder == newIndex) {
          result[i].order = newOrder + 1
          newOrder++
          newOrder++
        } else {
          result[i].order = newOrder
          newOrder++
        }
      } else {
        result[i].order = newIndex
        newOrder += 2
      }
    }
  }
   return result
}

export const move = (data, movedItem, destination, source, newIndex) => {
  let result = data
  let newOrderSource = 1
  let oldOrderSource = 1
  for (let i = 0; i < result.length; i++) {
    if (result[i].status == source) {
      result[i].order = oldOrderSource
      oldOrderSource++
      if (result[i].id == movedItem) {
        result[i].order = newIndex
        result[i].status = destination
      }
    }
    if (result[i].status == destination) {
      if (result[i].id != movedItem) {
        if (newOrderSource == newIndex) {
          result[i].order = newOrderSource + 1
          newOrderSource++
          newOrderSource++
        } else {
          result[i].order = newOrderSource
          newOrderSource++
        }
      } else {
        newOrderSource += 2
      }
    }
  }
  return result
}
