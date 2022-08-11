// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 删除 DELETE /storeApp/customerRecord/delete */
export async function deleteUsingDELETE4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE4Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/customerRecord/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取顾客变更记录 GET /storeApp/customerRecord/page */
export async function pageUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageCustomerRecordVo_>('/storeApp/customerRecord/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存顾客变更记录 POST /storeApp/customerRecord/save */
export async function saveUsingPOST3(
  body: API.CustomerRecordDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/customerRecord/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
