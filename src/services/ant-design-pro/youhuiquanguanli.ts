// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建/编辑折扣券 POST /storeApp/coupon/createOrderDiscountCoupon */
export async function createOrderDiscountCouponUsingPOST(
  body: API.CreateOrderDiscountCouponDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringString_>(
    '/storeApp/coupon/createOrderDiscountCoupon',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 创建/编辑代金券 POST /storeApp/coupon/createOrderVouchersCouponDto */
export async function createOrderDiscountCouponUsingPOST1(
  body: API.CreateOrderVouchersCouponDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringString_>(
    '/storeApp/coupon/createOrderVouchersCouponDto',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 创建/编辑项目券 POST /storeApp/coupon/createProjectCoupon */
export async function createProjectCouponUsingPOST(
  body: API.CreateProjectCouponGroupDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringString_>('/storeApp/coupon/createProjectCoupon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除优惠券 DELETE /storeApp/coupon/delete */
export async function deleteUsingDELETE3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE3Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoString_>('/storeApp/coupon/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查看会员优惠券列表(APP) POST /storeApp/coupon/getCouponInfoFromApp */
export async function getCouponInfoFromAppUsingPOST(
  body: API.OrderCouponInfosDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListOrderCouponInfosVoApp_>(
    '/storeApp/coupon/getCouponInfoFromApp',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 获取优惠券列表 POST /storeApp/coupon/getCouponsList */
export async function getCouponsListUsingPOST(
  body: API.CouponQueryDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoPageCouponInfos_>('/storeApp/coupon/getCouponsList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取所有可用优惠券模板列表, 不分页 POST /storeApp/coupon/getEffectiveCouponsWithoutPage */
export async function getEffectiveCouponsWithoutPageUsingPOST(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListCouponModelInfosVo_>(
    '/storeApp/coupon/getEffectiveCouponsWithoutPage',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 获取折扣券详情 GET /storeApp/coupon/getOrderDiscountCouponDetail */
export async function getOrderDiscountCouponDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrderDiscountCouponDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoEditOrderDiscountCouponVo_>(
    '/storeApp/coupon/getOrderDiscountCouponDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取代金券详情 GET /storeApp/coupon/getOrderVouchersCouponDetail */
export async function getOrderVouchersCouponDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrderVouchersCouponDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoEditOrderVouchersCouponVo_>(
    '/storeApp/coupon/getOrderVouchersCouponDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取项目券详情 GET /storeApp/coupon/getProjectCouponDetail */
export async function getProjectCouponDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectCouponDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoEditProjectCouponGroupVo_>(
    '/storeApp/coupon/getProjectCouponDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 发放优惠券  POST /storeApp/coupon/givingCoupon */
export async function givingCouponUsingPOST(
  body: API.HivingCouponDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoString_>('/storeApp/coupon/givingCoupon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查看会员优惠券列表 POST /storeApp/coupon/operationCoupon/getCouponInfoByMemberId */
export async function getCouponInfoByMemberIdUsingPOST(
  body: API.OrderCouponInfosDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoListOrderCouponInfosVo_>(
    '/storeApp/coupon/operationCoupon/getCouponInfoByMemberId',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 设置可用状态 POST /storeApp/coupon/setActivate */
export async function setActivateUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.setActivateUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoString_>('/storeApp/coupon/setActivate', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
