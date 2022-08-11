// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /storeApp/moneyMeal/add */
export async function saveUsingPOST11(body: API.MoneyMealDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/moneyMeal/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 购买会员卡 POST /storeApp/moneyMeal/buy */
export async function buyUsingPOST(body: API.MoneyMealBuyDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoMealBaseVo_>('/storeApp/moneyMeal/buy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /storeApp/moneyMeal/delete */
export async function deleteUsingDELETE12(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE12Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMeal/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取会员卡详情 GET /storeApp/moneyMeal/detail */
export async function detailUsingGET6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET6Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMoneyMealDetailVo_>('/storeApp/moneyMeal/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 PUT /storeApp/moneyMeal/edit */
export async function editUsingPUT12(body: API.MoneyMealDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMeal/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会员卡状态数量统计 GET /storeApp/moneyMeal/getMealTotal */
export async function getMealTotalUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoCountMealTotalVo_>('/storeApp/moneyMeal/getMealTotal', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据id获取会员的会员卡 GET /storeApp/moneyMeal/getMoneyMealMemberById */
export async function getMoneyMealMemberByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMoneyMealMemberByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMoneyMealMemberVo_>(
    '/storeApp/moneyMeal/getMoneyMealMemberById',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取会员拥有的金额会员卡 GET /storeApp/moneyMeal/getMoneyMealMembers */
export async function getMoneyMealMembersUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMoneyMealMembersUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListMoneyMealMemberVo_>(
    '/storeApp/moneyMeal/getMoneyMealMembers',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取可售会员卡列表 GET /storeApp/moneyMeal/getNormalList */
export async function getNormalListUsingGET4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNormalListUsingGET4Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListMoneyMealVo_>('/storeApp/moneyMeal/getNormalList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取卡类型基础信息列表 GET /storeApp/moneyMeal/mealTypeBaseList */
export async function mealTypeBaseListUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListMealTypeBaseVo_>('/storeApp/moneyMeal/mealTypeBaseList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询 POST /storeApp/moneyMeal/page */
export async function pageUsingPOST(body: API.MoneyMealQueryDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoObject_>('/storeApp/moneyMeal/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改会员卡卡号 PUT /storeApp/moneyMeal/updateCardNum */
export async function updateCardNumUsingPUT(
  body: API.UpdateCardNumDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMeal/updateCardNum', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改过期时间 PUT /storeApp/moneyMeal/updateExpireTime */
export async function updateExpireTimeUsingPUT(
  body: API.UpdateExpireTimeDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMeal/updateExpireTime', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改短信服务 PUT /storeApp/moneyMeal/updateNote */
export async function updateNoteUsingPUT(
  body: API.UpdateNoteDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMeal/updateNote', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改排序 PUT /storeApp/moneyMeal/updateOrderById */
export async function updateOrderByIdUsingPUT9(
  body: API.UpdateOrderBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMeal/updateOrderById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改会员卡支付密码 PUT /storeApp/moneyMeal/updatePwd */
export async function updatePwdUsingPUT(body: API.UpdatePwdDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMeal/updatePwd', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改会员卡备注 PUT /storeApp/moneyMeal/updateRemark */
export async function updateRemarkUsingPUT(
  body: API.UpdateRemarkDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMeal/updateRemark', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id修改状态 PUT /storeApp/moneyMeal/updateStatusById */
export async function updateStatusByIdUsingPUT9(
  body: API.UpdateStatusBaseDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMeal/updateStatusById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改会员卡类型 PUT /storeApp/moneyMeal/updateType */
export async function updateTypeUsingPUT(
  body: API.UpdateTypeDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/moneyMeal/updateType', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
