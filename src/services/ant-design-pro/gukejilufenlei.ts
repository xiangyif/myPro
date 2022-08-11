// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/recordCategory/add */
export async function saveUsingPOST20(
  body: API.RecordCategoryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/recordCategory/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/recordCategory/delete */
export async function deleteUsingDELETE17(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE17Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/recordCategory/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/recordCategory/edit */
export async function editUsingPUT17(
  body: API.RecordCategoryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/recordCategory/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 GET /storeApp/recordCategory/page */
export async function pageUsingGET14(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET14Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListRecordCategoryVo_>('/storeApp/recordCategory/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/recordCategory/updateOrderById */
export async function updateOrderByIdUsingPUT13(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/recordCategory/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/recordCategory/updateStatusById */
export async function updateStatusByIdUsingPUT13(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/recordCategory/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
