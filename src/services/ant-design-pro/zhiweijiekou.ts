// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/post/add */
export async function saveUsingPOST15(body: API.PostDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/post/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/post/delete */
export async function deleteUsingDELETE14(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE14Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/post/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/post/edit */
export async function editUsingPUT14(body: API.PostDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/post/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 岗位下拉列表 GET /storeApp/post/getNormalList */
export async function getNormalListUsingGET5(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListPostVo_>('/storeApp/post/getNormalList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取岗位树列表 GET /storeApp/post/getPostTree */
export async function getPostTreeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPostTreeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListPostTreeVo_>('/storeApp/post/getPostTree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询 GET /storeApp/post/page */
export async function pageUsingGET11(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET11Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListPostVo_>('/storeApp/post/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/post/updateOrderById */
export async function updateOrderByIdUsingPUT11(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/post/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/post/updateStatusById */
export async function updateStatusByIdUsingPUT11(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/post/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
