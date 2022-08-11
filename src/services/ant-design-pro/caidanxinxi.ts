// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取菜单资源树列表 GET /storeApp/menu/menuResourceTree */
export async function menuResourceTreeUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListSysMenuTree_>('/storeApp/menu/menuResourceTree', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据token获取菜单资源树列表 GET /storeApp/menu/menuResourceTreeByToken */
export async function menuResourceTreeByTokenUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseResultDtoListSysMenuTree_>('/storeApp/menu/menuResourceTreeByToken', {
    method: 'GET',
    ...(options || {}),
  });
}
