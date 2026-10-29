import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import StepSlider from './components/StepSlider'
import Roadmap from './components/Roadmap'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components) {
  return {
    ...docsComponents,
    StepSlider,
    Roadmap,
    ...components
  }
}