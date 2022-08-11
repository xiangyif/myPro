// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/serviceCategory/add */
export async function addUsingPOST2(body: API.CategoryDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/serviceCategory/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/serviceCategory/delete */
export async function deleteUsingDELETE22(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE22Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/serviceCategory/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/serviceCategory/edit */
export async function editUsingPUT22(body: API.CategoryDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/serviceCategory/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取最后一级分类列表 GET /storeApp/serviceCategory/getLastList */
export async function getLastListUsingGET1(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListCategoryBaseVo_>(
    '/storeApp/serviceCategory/getLastList',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 查询 GET /storeApp/serviceCategory/page */
export async function pageUsingGET19(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListCategoryTreeSelect_>('/storeApp/serviceCategory/page', {
    method: 'GET',
    ...(options || {}),
  });
}
