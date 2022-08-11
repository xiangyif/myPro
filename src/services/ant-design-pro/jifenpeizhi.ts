// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取积分配置 GET /storeApp/integralConfig/detail */
export async function detailUsingGET4(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoIntegralConfigVo_>('/storeApp/integralConfig/detail', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 修改积分配置 PUT /storeApp/integralConfig/edit */
export async function editUsingPUT9(body: API.IntegralConfigDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/integralConfig/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
