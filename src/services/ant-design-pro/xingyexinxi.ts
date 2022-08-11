// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取行业列表 GET /storeApp/industry/list */
export async function getIndustryListUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListIndustryDetail_>('/storeApp/industry/list', {
    method: 'GET',
    ...(options || {}),
  });
}
