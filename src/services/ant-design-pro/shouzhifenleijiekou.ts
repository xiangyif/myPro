// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/spendcategory/add */
export async function saveUsingPOST28(
  body: API.SpendCategoryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/spendcategory/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/spendcategory/delete */
export async function deleteUsingDELETE25(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE25Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/spendcategory/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/spendcategory/edit */
export async function editUsingPUT25(body: API.SpendCategoryDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/spendcategory/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 GET /storeApp/spendcategory/page */
export async function pageUsingGET22(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET22Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListSpendCategoryVo_>('/storeApp/spendcategory/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/spendcategory/updateOrderById */
export async function updateOrderByIdUsingPUT20(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/spendcategory/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/spendcategory/updateStatusById */
export async function updateStatusByIdUsingPUT20(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/spendcategory/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
