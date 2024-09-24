import openImageSelector from '@/modules/HeavyComponents/ImageSelector/ImageSelector'
import collection from './collection'

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
    const output = `<Image image="${selectedImage.slug}" width={400} height={400} />`

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

/**
 * Функция редиректа с заменой последнего сегмента пути.
 * @param {NextRouter} router - объект роутера, полученный через useRouter().
 * @param {string} slug - новый slug для замены последнего сегмента пути.
 */
export const redirectToSlug = (currentPath: string, slug: string) => {


  // Разбиваем путь на сегменты
  const pathArray = currentPath.split('/').filter((segment: any) => segment);

  // Заменяем последний сегмент на переданный slug
  pathArray[pathArray.length - 1] = slug;

  // Собираем новый путь
  const newPath = '/' + pathArray.join('/');

  return newPath
};

