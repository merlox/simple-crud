// Specify the endpoint
const endpoint = '/example'
// Specify the mongoose schema here
const schema = 'User'

const err = (res, msg) => {
  return res.status(400).json({
    ok: false,
    msg,
  })
}

// GET all the items
app.get(endpoint, limiter({
  windowMs: 10 * 60 * 1000,
  max: 10,
  message: "You're making too many requests to this endpoint",
}), async (req, res) => {
  try {
    const itemsFound = await Item.find({})
    if (itemsFound) {
      return res.status(200).json({
        ok: true,
        msg: 'Items found successfully',
        items: itemsFound,
      })
    } else {
      return err(res, 'No items found')
    }
  } catch (e) {
    return err(res, 'Error processing the request')
  }
})

// POST an item
// Copy the following template for parameter verification
/*
  if (!req.body.PARAMETER || req.body.PARAMETER.length <= 0) {
    return err(res, "The PARAMETER field is missing or is empty")
  }
 */
// Replace the parameters variable with your items like:
/*
  const parameters = {
    profileImage: req.body.profileImage,
    rounds: req.body.rounds,
  }
 */
app.post(endpoint, limiter({
  windowMs: 10 * 60 * 1000,
  max: 10,
  message: "You're making too many requests to this endpoint",
}), async (req, res) => {
  try {
    // Add the parameter verifications from the template
    const parameters = {
    }
    let newItem = new Item(parameters)
    try {
      await newItem.save()
    } catch (e) {
      return err(res, "Error saving the items on the database")
    }
    return res.status(200).json({
      ok: true,
      msg: "Items added successfully",
    })
  } catch (e) {
    return err(res, 'Error processing the request')
  }
})

// PUT an item
// Copy the following template for parameter verification
/*
  if (!req.body.PARAMETER || req.body.PARAMETER.length <= 0) {
    return err(res, "The PARAMETER field is missing or is empty")
  }
 */
// Replace the parameters variable with your items like:
/*
  const parameters = {
    profileImage: req.body.profileImage,
    rounds: req.body.rounds,
  }
 */
// Replace the search variable with your search like:
/*
 const search = {
   rounds: req.body.rounds,
 }
*/
app.put(endpoint, limiter({
  windowMs: 10 * 60 * 1000,
  max: 10,
  message: "You're making too many requests to this endpoint",
}), async (req, res) => {
  try {
    // Add the parameter verifications from the template
    const parameters = {
    }
    // Add the search to find the item
    const search = {

    }
    let itemFound = await Item.find({

    })
    let newItem = new Item(parameters)
    try {
      await newItem.save()
    } catch (e) {
      return err(res, "Error saving the items on the database")
    }
    return res.status(200).json({
      ok: true,
      msg: "Items added successfully",
    })
  } catch (e) {
    return err(res, 'Error processing the request')
  }
})
