const doubleColumnsOptions = [
  {
    value: '200',
    label: '200以内',
  },
  {
    value: '200-500',
    label: '200-500',
  },
  {
    value: '500-1000',
    label: '500-1000',
  },
  {
    value: '1000-2000',
    label: '1000-2000',
  },
  {
    value: '2000',
    label: '2000以上',
  },
];

Component({
  data: {
    doubleColumnsOptions,
    product: {
      value: 'all',
      options: [
        {
          value: 'all',
          label: '全部',
        },
        {
          value: '200',
          label: '200以内',
        },
        {
          value: '200-500',
          label: '200-500',
        },
        {
          value: '500-1000',
          label: '500-1000',
        },
        {
          value: '1000-2000',
          label: '1000-2000',
        },
        {
          value: '2000',
          label: '2000以上',
        },
      ],
    },
    sorter: {
      value: 'default',
      options: [
        {
          value: 'default',
          label: '默认排序',
        },
        {
          value: 'lowprice',
          label: '价格从低到高',
        },
        {
          value: 'highprice',
          label: '价格从高到低',
        },
      ],
    },
  },
  methods: {
    onChange(e) {
      this.setData({
        'product.value': e.detail.value,
      });
    },
  },
});
