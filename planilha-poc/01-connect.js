const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('15px2jUV82p2KOdeqZtK7ugLtLdqxJBYfR0cd-aP86Jk/edit#gid=0')

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)

  } catch (err) {
    console.log(err)
  }
}
run()