// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/serve/add */
export async function saveUsingPOST25(body: API.ServeDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/serve/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/serve/delete */
export async function deleteUsingDELETE21(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE21Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/serve/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 批量删除 PUT /storeApp/serve/deleteBatch */
export async function deleteBatchUsingPUT1(
  body: API.DeleteBatchBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/serve/deleteBatch', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/serve/edit */
export async function editUsingPUT21(body: API.ServeDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/serve/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取服务列表(es) GET /storeApp/serve/esPage */
export async function esPageUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.esPageUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageProjectDoc_>('/storeApp/serve/esPage', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取分类服务树 GET /storeApp/serve/getCategoryServeTree */
export async function getCategoryServeTreeUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListCategoryServeTree_>(
    '/storeApp/serve/getCategoryServeTree',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取分类服务详情 GET /storeApp/serve/getServeBaseVos */
export async function getServeBaseVosUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getServeBaseVosUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListServeBaseVo_>('/storeApp/serve/getServeBaseVos', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询 GET /storeApp/serve/page */
export async function pageUsingGET18(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET18Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageServeVo_>('/storeApp/serve/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 批量修改分类 PUT /storeApp/serve/updateBatchCategory */
export async function updateBatchCategoryUsingPUT1(
  body: API.UpdateBatchCategoryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/serve/updateBatchCategory', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量修改状态 PUT /storeApp/serve/updateBatchStatus */
export async function updateBatchStatusUsingPUT1(
  body: API.UpdateBatchStatusDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/serve/updateBatchStatus', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/serve/updateOrderById */
export async function updateOrderByIdUsingPUT17(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/serve/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/serve/updateStatusById */
export async function updateStatusByIdUsingPUT17(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/serve/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
