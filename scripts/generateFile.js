require('dotenv').config()
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, `../public/${process.env.WEBMASTER_INDEX_KEY}.txt`)
const fileContent = process.env.WEBMASTER_INDEX_KEY || ''

fs.writeFileSync(filePath, fileContent)
