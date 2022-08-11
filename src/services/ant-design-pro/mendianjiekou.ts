// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添 加 门店 POST /storeApp/store/add */
export async function addUsingPOST3(body: API.CreateShopDto, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoString_>('/storeApp/store/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 变更负责人 POST /storeApp/store/changePerson */
export async function changePersonUsingPOST(
  body: API.ChangePersonDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/store/changePerson', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 切换门店 POST /storeApp/store/changeStore */
export async function changeStoreUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.changeStoreUsingPOSTParams & {
    // header
    /** user_id */
    user_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/store/changeStore', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增负责人 POST /storeApp/store/createPerson */
export async function createPersonUsingPOST(
  body: API.CreatePersonDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/store/createPerson', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取门店详情 GET /storeApp/store/getDetail */
export async function getStoreDetailInfoByStoreIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getStoreDetailInfoByStoreIdUsingGETParams & {
    // header
    /** store_id */
    store_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoStoreDetailInfo_>('/storeApp/store/getDetail', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 获取我的门店列表 GET /storeApp/store/getMyStoreList */
export async function getMyStoreListUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListStoreList_>('/storeApp/store/getMyStoreList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取最后登录店铺 POST /storeApp/store/lastLoginShop */
export async function getLastShopUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLastShopUsingPOSTParams & {
    // header
    /** user_id */
    user_id?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoMapStringObject_>('/storeApp/store/lastLoginShop', {
    method: 'POST',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 获取门店支付方式 GET /storeApp/store/payment/info */
export async function getPaymentMethodUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListPaymentMethodVo_>('/storeApp/store/payment/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 编辑门店 POST /storeApp/store/update */
export async function updateUsingPOST(body: API.ShopinfoVo, options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/store/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 验证门店负责人 POST /storeApp/store/verifyPerson */
export async function verifyPersonUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.verifyPersonUsingPOSTParams & {
    // header
    /** store_id */
    store_id: number;
  },
  body: API.verifyPersonDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseResultDtoBoolean_>('/storeApp/store/verifyPerson', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
