import openImageSelector from '../../../../modules/HeavyComponents/ImageSelector/ImageSelector'
import collection from './ui/collection'

const customCarouselAction = async (editor: EasyMDE) => {
  const selectedImage = await openImageSelector()

  if (selectedImage?.slug) {
    const cm = editor.codemirror
    const output = `<Carousel images={["${selectedImage.slug}"]} width={400} height={300} />`

    cm.replaceSelection(output)
  }
}

const customImageAction = async (editor: EasyMDE) => {
  const selectedImage = await openImageSelector()

  if (selectedImage?.slug) {
    const cm = editor.codemirror
    const output = `<Image image="${selectedImage.slug}" width={400} height={200} />`

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
      action: customImageAction,
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
    carousel: 'Ctrl-O',
  },
  spellChecker: false,
}
