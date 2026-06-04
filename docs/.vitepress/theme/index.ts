import DefaultTheme from 'vitepress/theme'
import { h, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

const renderMermaid = async () => {
  if (typeof window === 'undefined') return
  if (!document.querySelector('.mermaid')) return

  const { default: mermaid } = await import('mermaid')

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default'
  })

  await mermaid.run({
    querySelector: '.mermaid'
  })
}

export default {
  extends: DefaultTheme,
  Layout: {
    setup() {
      const route = useRoute()

      onMounted(() => {
        nextTick(renderMermaid)
      })

      watch(
        () => route.path,
        () => {
          nextTick(renderMermaid)
        }
      )

      return () => h(DefaultTheme.Layout)
    }
  }
}
