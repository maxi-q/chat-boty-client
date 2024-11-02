import { Article, GetArticleFileType, getArticlesType, GetPostInfo, IGetArticleFile, IGetArticleInfo, IGetArticles, PostInfo } from '../blog/ArticlesTypes'

export interface PostCaseInfo extends PostInfo {}

export interface GetCaseInfo extends GetPostInfo {}

export interface IGetCases extends IGetArticles {}

export interface CaseType extends Article {}

export type getCasesType = getArticlesType

export interface IGetCaseFile extends IGetArticleFile {}

export type GetCaseFileType = GetArticleFileType

export interface IGetCaseInfo extends IGetArticleInfo {}
