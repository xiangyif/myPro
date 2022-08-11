// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/productCategory/add */
export async function addUsingPOST1(body: API.CategoryDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/productCategory/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/productCategory/delete */
export async function deleteUsingDELETE15(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE15Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/productCategory/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/productCategory/edit */
export async function editUsingPUT15(body: API.CategoryDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/productCategory/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取最后一级分类列表 GET /storeApp/productCategory/getLastList */
export async function getLastListUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListCategoryBaseVo_>(
    '/storeApp/productCategory/getLastList',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 查询 GET /storeApp/productCategory/page */
export async function pageUsingGET12(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListCategoryTreeSelect_>('/storeApp/productCategory/page', {
    method: 'GET',
    ...(options || {}),
  });
}
