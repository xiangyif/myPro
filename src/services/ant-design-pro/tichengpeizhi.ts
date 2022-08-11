// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取提成配置 GET /storeApp/commissionConfig/detail */
export async function detailUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoCommissionConfigVo_>('/storeApp/commissionConfig/detail', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 修改提成配置 PUT /storeApp/commissionConfig/edit */
export async function editUsingPUT2(
  body: API.CommissionConfigDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/commissionConfig/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
