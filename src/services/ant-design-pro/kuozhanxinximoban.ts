// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/extendTemplate/add */
export async function saveUsingPOST7(
  body: API.ExtendTemplateDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/extendTemplate/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/extendTemplate/delete */
export async function deleteUsingDELETE7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE7Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/extendTemplate/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/extendTemplate/edit */
export async function editUsingPUT6(body: API.ExtendTemplateDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/extendTemplate/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取可用模板列表 GET /storeApp/extendTemplate/getNormalList */
export async function getNormalListUsingGET2(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListExtendTemplateVo_>(
    '/storeApp/extendTemplate/getNormalList',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 查询 GET /storeApp/extendTemplate/page */
export async function pageUsingGET6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET6Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageExtendTemplateVo_>('/storeApp/extendTemplate/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/extendTemplate/updateOrderById */
export async function updateOrderByIdUsingPUT5(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/extendTemplate/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/extendTemplate/updateStatusById */
export async function updateStatusByIdUsingPUT5(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/extendTemplate/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
