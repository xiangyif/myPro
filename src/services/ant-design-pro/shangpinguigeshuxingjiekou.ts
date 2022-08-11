// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/specsKey/add */
export async function saveUsingPOST26(body: API.SpecsKeyDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/specsKey/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/specsKey/delete */
export async function deleteUsingDELETE23(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE23Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/specsKey/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品规格属性详细列表 GET /storeApp/specsKey/detail */
export async function detailUsingGET14(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListSpecsKeyDetailVo_>('/storeApp/specsKey/detail', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/specsKey/edit */
export async function editUsingPUT23(body: API.SpecsKeyDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/specsKey/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 GET /storeApp/specsKey/page */
export async function pageUsingGET20(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET20Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListSpecsKeyVo_>('/storeApp/specsKey/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/specsKey/updateOrderById */
export async function updateOrderByIdUsingPUT18(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/specsKey/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/specsKey/updateStatusById */
export async function updateStatusByIdUsingPUT18(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/specsKey/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
