import { lazy, type JSX, type SVGProps } from 'react'

type SVGComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element

const modules = import.meta.glob<{ default: SVGComponent }>('./assets/svgs/*.svg', {
  query: '?react',
})

export const icons = Object.fromEntries(
  Object.entries(modules).map(([path, dynamicImportFn]) => {
    const name = path.match(/\/([\w-]+)\.svg$/)?.[1]

    return [name, lazy(dynamicImportFn)]
  }),
)
