// import { getCarList } from '../../../services/good/fetchCategoryList';
Page({
  data: {
    list: [],
  },
  async init() {
    try {
      // const result = await getCarList();
      // console.log(result);
      // this.setData({
      //   list: result,
      // });
      this.setData({
        list: [
          {
            children: [
              {
                groupId: '249481',
                name: '全部',
                thumbnail: 'https://cdn-we-retail.ym.tencent.com/miniapp/category/category-default.png',
                children: [
                  {
                    groupId: '249480',
                    name: '日产轩逸',

                    thumbnail:
                      'https://car3.autoimg.cn/cardfs/product/g28/M0A/7C/40/1400x0_1_q95_autohomecar__ChsFWWN67S-ARyCkACOCjoSWubE180.jpg',
                  },
                  {
                    groupId: '249480',
                    name: '毛呢外套',
                    thumbnail: 'https://cdn-we-retail.ym.tencent.com/tsr/classify/img-2.png',
                  },
                  {
                    groupId: '249480',
                    name: '雪纺衫',
                    thumbnail: 'https://cdn-we-retail.ym.tencent.com/tsr/classify/img-3.png',
                  },
                  {
                    groupId: '249480',
                    name: '羽绒服',
                    thumbnail: 'https://cdn-we-retail.ym.tencent.com/tsr/classify/img-4.png',
                  },
                  {
                    groupId: '249480',
                    name: '毛衣',
                    thumbnail: 'https://cdn-we-retail.ym.tencent.com/tsr/classify/img-5.png',
                  },
                  {
                    groupId: '249480',
                    name: '棉衣',
                    thumbnail: 'https://cdn-we-retail.ym.tencent.com/tsr/classify/img-6.png',
                  },
                  {
                    groupId: '249480',
                    name: '西装',
                    thumbnail: 'https://cdn-we-retail.ym.tencent.com/tsr/classify/img-7.png',
                  },
                  {
                    groupId: '249480',
                    name: '马甲',
                    thumbnail: 'https://cdn-we-retail.ym.tencent.com/tsr/classify/img-8.png',
                  },
                  {
                    groupId: '249480',
                    name: '连衣裙',
                    thumbnail: 'https://cdn-we-retail.ym.tencent.com/tsr/classify/img-9.png',
                  },
                  {
                    groupId: '249480',
                    name: '半身裙',
                    thumbnail: 'https://cdn-we-retail.ym.tencent.com/tsr/classify/img-10.png',
                  },
                  {
                    groupId: '249480',
                    name: '裤子',
                    thumbnail: 'https://cdn-we-retail.ym.tencent.com/tsr/classify/img-11.png',
                  },
                ],
              },
            ],
          },
        ],
      });
    } catch (error) {
      console.error('err:', error);
    }
  },

  onShow() {
    this.getTabBar().init();
  },
  onChange() {
    wx.navigateTo({
      url: '/pages/goods/list/index',
    });
  },
  onLoad() {
    this.init(true);
  },
});
