// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/product/add */
export async function saveUsingPOST17(body: API.ProductDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/product/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/product/delete */
export async function deleteUsingDELETE16(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE16Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/product/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 批量删除 PUT /storeApp/product/deleteBatch */
export async function deleteBatchUsingPUT(
  body: API.DeleteBatchBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/product/deleteBatch', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取商品详情 GET /storeApp/product/detail */
export async function detailUsingGET10(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET10Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoProductDetailVo_>('/storeApp/product/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/product/edit */
export async function editUsingPUT16(body: API.ProductDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/product/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取商品列表(es) GET /storeApp/product/esPage */
export async function esPageUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.esPageUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageProjectDoc_>('/storeApp/product/esPage', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 扫码获取商品信息 GET /storeApp/product/getBySearchCode */
export async function getBySearchCodeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBySearchCodeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoProjectDoc_>('/storeApp/product/getBySearchCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取分类商品树 GET /storeApp/product/getCategoryProductTree */
export async function getCategoryProductTreeUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListCategoryProductTree_>(
    '/storeApp/product/getCategoryProductTree',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 根据规格获取商品基础信息 GET /storeApp/product/getSpecsBase */
export async function getSpecsBaseUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSpecsBaseUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoSpecsBaseVo_>('/storeApp/product/getSpecsBase', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据商品id获取商品规格 GET /storeApp/product/getSpecsKeyDetail */
export async function getSpecsKeyDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSpecsKeyDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListSpecsKeyDetailVo_>(
    '/storeApp/product/getSpecsKeyDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取分类商品规格详情 GET /storeApp/product/getSpecsValueBaseVos */
export async function getSpecsValueBaseVosUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSpecsValueBaseVosUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListSpecsValueBaseVo_>(
    '/storeApp/product/getSpecsValueBaseVos',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询 GET /storeApp/product/page */
export async function pageUsingGET13(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET13Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageProductVo_>('/storeApp/product/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 批量修改分类 PUT /storeApp/product/updateBatchCategory */
export async function updateBatchCategoryUsingPUT(
  body: API.UpdateBatchCategoryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/product/updateBatchCategory', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量修改状态 PUT /storeApp/product/updateBatchStatus */
export async function updateBatchStatusUsingPUT(
  body: API.UpdateBatchStatusDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/product/updateBatchStatus', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/product/updateOrderById */
export async function updateOrderByIdUsingPUT12(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/product/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/product/updateStatusById */
export async function updateStatusByIdUsingPUT12(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/product/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
