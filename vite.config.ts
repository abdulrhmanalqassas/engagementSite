import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const pkgPath = path.resolve(process.cwd(), 'package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
const base = `/${pkg.name}/`

const rootIndexPath = path.resolve(process.cwd(), 'index.tsx')

const exportPlugin = {
  name: 'export-engagement-website',
  enforce: 'pre' as const,
  transform(code: string, id: string) {
    const normalized = id.split('?')[0]
    const isTarget = path.resolve(normalized) === rootIndexPath
    if (isTarget && !/export\s+default\s+EngagementWebsite/.test(code)) {
      return { code: `${code}\n\nexport default EngagementWebsite;`, map: null }
    }
    return null
  }
}

export default defineConfig({
  base,
  plugins: [react(), exportPlugin]
})