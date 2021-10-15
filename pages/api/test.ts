import { NextApiRequest, NextApiResponse } from "next"
import { tracktryRes } from "../../lib/tracktry"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { query } = req
  console.log("hi")
  try {
    var postData = { tracking_number: "RA018458445JP" }
    var url = "http://api.tracktry.com/v1/carriers/detect"
    tracktryRes(url, postData, "POST", function (data) {
      console.log(data)
    })

    res.status(200)
    res.json({ authorized: true })
  } catch (err) {
    res.status(500)
    res.json({ authorized: false, error: err.message })
  }
}
