import { ImageSize } from 'enums'

export const convertImagesUrl = (title: string): string =>
  title.replaceAll(ImageSize.ORIGINAL, ImageSize.SMALL)
