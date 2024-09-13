import collection from './components/ui/collection'

const customCarouselAction = (editor: EasyMDE) => {
  const url = prompt('Введите URL изображения')

  if (url) {
    const cm = editor.codemirror
    const output = `<Carousel images={["${url}"]} width={400} height={400} />`

    cm.replaceSelection(output)
  }
}

export const settings: EasyMDE.Options = {
  toolbar: [
    'heading-bigger',
    'heading',
    '|',
    'bold',
    'italic',
    // 'strikethrough',
    '|',
    'quote',
    'unordered-list',
    'ordered-list',
    '|',
    'link',
    {
      name: 'custom-image',
      action: function customImageAction(editor) {
        const url = prompt('Введите URL изображения')

        if (url) {
          const cm = editor.codemirror
          const output = `<Image image="${url}" width={400} height={400} />`
          cm.replaceSelection(output)
        }
      },
      className: 'fa fa-image',
      title: 'Вставить изображение',
    },
    'horizontal-rule',
    '|',
    'guide',
    'undo',
    'redo',
    {
      name: 'carousel',
      action: customCarouselAction,
      className: 'fa',
      title: 'Галерея изображений',
      icon: collection,
    },
  ],
  autosave: {
    enabled: true,
    uniqueId: 'markdown-editor',
  },
  shortcuts: {
    'custom-image': 'Ctrl-I',
    carousel: 'Ctrl-C',
  },
  spellChecker: false,
}
