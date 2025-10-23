import { readdir, writeFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { removeBackground } from '@imgly/background-removal-node'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
// Directory can be provided via CLI arg, defaults to 'Logos'
const targetDir = process.argv[2] ? path.resolve(projectRoot, process.argv[2]) : path.join(projectRoot, 'Logos')

function toFileUrl(p) {
  // Convert Windows path to file URL
  const normalized = p.replace(/\\/g, '/')
  return new URL(`file:///${normalized}`)
}

async function processFile(filePath) {
  try {
    const fileUrl = toFileUrl(filePath)
    const blob = await removeBackground(fileUrl)
    const buffer = Buffer.from(await blob.arrayBuffer())
    await writeFile(filePath, buffer)
    console.log(`Processed: ${path.basename(filePath)}`)
  } catch (err) {
    console.error(`Failed: ${filePath}: ${err?.message || err}`)
  }
}

async function main() {
  console.log(`Removing backgrounds in: ${targetDir}`)
  const entries = await readdir(targetDir)
  const targets = entries.filter((f) => /(\.png|\.jpg|\.jpeg)$/i.test(f))
  if (targets.length === 0) {
    console.log('No image files found in target directory.')
    return
  }
  for (const fname of targets) {
    const filePath = path.join(targetDir, fname)
    await processFile(filePath)
  }
  console.log(`Done. Processed ${targets.length} file(s).`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})