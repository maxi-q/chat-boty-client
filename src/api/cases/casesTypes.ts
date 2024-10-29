import {
  CaseType as _CaseType,
  GetCaseFileType as _GetCaseFileType,
  getCasesType as _getCasesType,
  IGetCaseFile as _IGetCaseFile,
  IGetCaseInfo as _IGetCaseInfo,
  IGetCases as _IGetCases,
} from '../admin/cases/CasesTypes'

export interface IGetCases extends _IGetCases {}

export interface CaseType extends _CaseType {}

export type getCasesType = _getCasesType

export interface IGetCaseFile extends _IGetCaseFile {}

export type GetCaseFileType = _GetCaseFileType

export interface IGetCaseInfo extends _IGetCaseInfo {}
