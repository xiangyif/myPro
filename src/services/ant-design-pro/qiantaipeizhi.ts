// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取前台配置 GET /storeApp/systemConfig/detail */
export async function detailUsingGET15(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoSystemConfigVo_>('/storeApp/systemConfig/detail', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 修改前台配置 PUT /storeApp/systemConfig/edit */
export async function editUsingPUT26(body: API.SystemConfigDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/systemConfig/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
