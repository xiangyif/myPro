// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/gift/add */
export async function saveUsingPOST8(body: API.GiftDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/gift/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/gift/delete */
export async function deleteUsingDELETE8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE8Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/gift/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/gift/edit */
export async function editUsingPUT7(body: API.GiftDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/gift/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取可用礼品列表 GET /storeApp/gift/getNormalList */
export async function getNormalListUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNormalListUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListGiftVo_>('/storeApp/gift/getNormalList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询 GET /storeApp/gift/page */
export async function pageUsingGET7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET7Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageGiftVo_>('/storeApp/gift/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/gift/updateOrderById */
export async function updateOrderByIdUsingPUT6(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/gift/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/gift/updateStatusById */
export async function updateStatusByIdUsingPUT6(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/gift/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
