import { config } from '../../config/index';

/** 获取商品列表 */
function mockFetchGoodCategory() {
  const { delay } = require('../_utils/delay');
  const { getCategoryList } = require('../../model/category');
  return delay().then(() => getCategoryList());
}

/** 获取商品列表 */
export function getCategoryList() {
  if (config.useMock) {
    return mockFetchGoodCategory();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}

/** 获取汽车列表 */
function mockFetchCars() {
  const { delay } = require('../_utils/delay');
  const { getCarList } = require('../../model/car');
  return delay().then(() => getCarList());
}

/** 获取汽车列表 */
export function getCarList() {
  if (config.useMock) {
    return mockFetchCars();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
