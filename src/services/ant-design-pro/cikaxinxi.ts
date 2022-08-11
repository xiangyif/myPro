// @ts-ignore
import { request } from 'umi';

/** 新增 POST /storeApp/countMeal/add */
export async function saveUsingPOST2(body: API.CountMealDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/countMeal/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 次卡汇总明细 GET /storeApp/countMeal/countMealSummary */
export async function countMealSummaryUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.countMealSummaryUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageCountMealDoc_>('/storeApp/countMeal/countMealSummary', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 次卡汇总明细(根据类型) GET /storeApp/countMeal/countMealTypeSummary */
export async function countMealTypeSummaryUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.countMealTypeSummaryUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoCountMealTypeSummaryVo_>(
    '/storeApp/countMeal/countMealTypeSummary',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 删除 DELETE /storeApp/countMeal/delete */
export async function deleteUsingDELETE2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE2Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/countMeal/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取次卡详情 GET /storeApp/countMeal/detail */
export async function detailUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoCountMealDetailVo_>('/storeApp/countMeal/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/countMeal/edit */
export async function editUsingPUT3(body: API.CountMealDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/countMeal/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取次卡状态数量统计 GET /storeApp/countMeal/getCountMealTotal */
export async function getCountMealTotalUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoCountMealTotalVo_>('/storeApp/countMeal/getCountMealTotal', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取次卡模板列表 GET /storeApp/countMeal/getCountMealTypeList */
export async function getCountMealTypeListUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListCountMealTypeBaseVo_>(
    '/storeApp/countMeal/getCountMealTypeList',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取会员拥有次卡 GET /storeApp/countMeal/getMemberCountMeal */
export async function getMemberCountMealUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMemberCountMealUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListMemberCountMealVo_>(
    '/storeApp/countMeal/getMemberCountMeal',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取会员拥有次卡(app) GET /storeApp/countMeal/getMemberCountMealApp */
export async function getMemberCountMealAppUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMemberCountMealAppUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListMemberCountMealAppVo_>(
    '/storeApp/countMeal/getMemberCountMealApp',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取可售次卡列表 GET /storeApp/countMeal/getNormalList */
export async function getNormalListUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNormalListUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListCountMealBaseVo_>('/storeApp/countMeal/getNormalList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取可售次卡列表(根据类型分组) GET /storeApp/countMeal/getNormalTypeList */
export async function getNormalTypeListUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListNormalTypeListVo_>(
    '/storeApp/countMeal/getNormalTypeList',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取次卡基础列表 GET /storeApp/countMeal/list */
export async function listUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListCountMealBaseVo_>('/storeApp/countMeal/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询 GET /storeApp/countMeal/page */
export async function pageUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageCountMealVo_>('/storeApp/countMeal/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取次卡变更明细 GET /storeApp/countMeal/pageRecord */
export async function pageRecordUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoObject_>('/storeApp/countMeal/pageRecord', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/countMeal/updateOrderById */
export async function updateOrderByIdUsingPUT2(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/countMeal/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/countMeal/updateStatusById */
export async function updateStatusByIdUsingPUT2(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/countMeal/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
