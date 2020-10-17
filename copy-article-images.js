const fs = require("fs")
const path = require("path")

const SRC_BASE_DIR = path.join(process.cwd(), "posts")
const DIST_BASE_DIR = path.join(process.cwd(), "public", "articleImages")

const copyImages = () => {
  const dirNames = fs
    .readdirSync(SRC_BASE_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  for (const dirName of dirNames) {
    const srcDirPath = path.join(SRC_BASE_DIR, dirName, "images")
    const fileNames = fs
      .readdirSync(srcDirPath, { withFileTypes: true })
      .filter((dirent) => dirent.isFile)
      .map((dirent) => dirent.name)

    for (const fileName of fileNames) {
      const destDirPath = path.join(DIST_BASE_DIR, dirName)
      if (!fs.existsSync(destDirPath)) {
        fs.mkdirSync(destDirPath, { recursive: true })
      }
      const srcFilePath = path.join(srcDirPath, fileName)
      const destFilePath = path.join(destDirPath, fileName)
      fs.copyFileSync(srcFilePath, destFilePath)
    }
  }
}

const execute = () => {
  console.log("Start Copy Article Images")
  copyImages()
  console.log("End Copy Article Images")
}

execute()
