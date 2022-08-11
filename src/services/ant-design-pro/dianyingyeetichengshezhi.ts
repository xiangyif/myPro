// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增店营业额提成设置 POST /storeApp/turnoverConfig/add */
export async function addUsingPOST4(body: API.TurnoverConfigDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/turnoverConfig/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/turnoverConfig/delete */
export async function deleteUsingDELETE26(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE26Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/turnoverConfig/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑店营业额提成设置 PUT /storeApp/turnoverConfig/edit */
export async function editUsingPUT27(
  body: API.TurnoverConfigDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/turnoverConfig/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取店营业额提成设置 GET /storeApp/turnoverConfig/list */
export async function listUsingGET7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET7Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListTurnoverConfigVo_>('/storeApp/turnoverConfig/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
