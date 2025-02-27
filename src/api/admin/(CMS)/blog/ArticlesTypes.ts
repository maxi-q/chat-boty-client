import { Article, GetArticleFileType, getArticlesType, GetPostInfo, IGetArticleFile, IGetArticleInfo, IGetArticles, PostInfo, SimpleArticleType } from '../types/ArticleTypes'

export interface PostBlogArticleInfo extends PostInfo {}

export interface GetBlogArticleInfo extends GetPostInfo {}

export interface IGetBlogArticles extends IGetArticles {}

export interface BlogArticleType extends Article {}

export type getBlogArticlesType = getArticlesType

export interface IGetBlogArticleFile extends IGetArticleFile {}

export type GetBlogArticleFileType = GetArticleFileType

export interface IGetBlogArticleInfo extends IGetArticleInfo {}

export interface SimpleBlogArticleType extends SimpleArticleType {}