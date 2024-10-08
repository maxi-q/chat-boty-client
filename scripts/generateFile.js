require('dotenv').config()

if (process.env.NEXT_PUBLIC_MODE === 'production') {
  const fs = require('fs')
  const path = require('path')

  const filePath = path.join(__dirname, `../public/${process.env.WEBMASTER_INDEX_KEY}.txt`)
  const fileContent = process.env.WEBMASTER_INDEX_KEY || ''

  fs.writeFileSync(filePath, fileContent)

  console.log('WEBMASTER_INDEX_FILE generated successfully')
}
