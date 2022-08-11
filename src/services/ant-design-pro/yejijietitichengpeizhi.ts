// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增业绩阶梯提成配置 POST /storeApp/ladderConfig/add */
export async function addUsingPOST(body: API.LadderConfigDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/ladderConfig/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/ladderConfig/delete */
export async function deleteUsingDELETE10(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE10Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/ladderConfig/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑业绩阶梯提成配置 PUT /storeApp/ladderConfig/edit */
export async function editUsingPUT10(body: API.LadderConfigDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/ladderConfig/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取业绩阶梯提成配置 GET /storeApp/ladderConfig/list */
export async function listUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListLadderConfigVo_>('/storeApp/ladderConfig/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
