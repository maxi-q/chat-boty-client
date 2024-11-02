import {
  Article as _ArticleType,
  GetArticleFileType as _GetArticleFileType,
  getArticlesType as _getArticlesType,
  IGetArticleFile as _IGetArticleFile,
  IGetArticleInfo as _IGetArticleInfo,
  IGetArticles as _IGetArticles,
  SimpleArticleType as _SimpleArticleType,
} from '../admin/blog/ArticlesTypes'

export interface IGetArticles extends _IGetArticles {}

export type SimpleArticleType = _SimpleArticleType

export interface ArticleType extends _ArticleType {}

export type getArticlesType = _getArticlesType

export interface IGetArticleFile extends _IGetArticleFile {}

export type GetArticleFileType = _GetArticleFileType

export interface IGetArticleInfo extends _IGetArticleInfo {}
