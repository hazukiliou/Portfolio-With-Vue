const { copyFileSync } = require('node:fs')
const path = require('path')

const copyFile = () => {
  try {
    const copiedPath = path.join(__dirname, '../dist/index.html')
    const resultPath = path.join(__dirname, '../dist/404.html')

    copyFileSync(copiedPath, resultPath)

    console.log('copy successful!!')
  } catch (e) {
    console.log(e)
  }
}


copyFile()