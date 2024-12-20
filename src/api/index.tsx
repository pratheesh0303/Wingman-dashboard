const glanceData = [
  {
    title: 'CONSULTATIONS',
    key: 'consultations',
    value: 24,
    percentage: 15,
    type: 'number',
  },
  {
    title: 'ORDERS PLACED',
    key: 'orders_placed',
    value: 12,
    percentage: -15,
    type: 'number',
  },
  {
    title: 'CONVERSION',
    key: 'conversion',
    value: 50,
    percentage: -15,
    type: 'number',
  },
  {
    title: 'TOTAL SALE VALUE',
    key: 'total_sale_value',
    value: 2400,
    percentage: 15,
    type: 'currency',
    currency: 'usd',
  },
  {
    title: 'AVERAGE ORDER VALUE',
    key: 'average_order_value',
    value: 240,
    percentage: 15,
    type: 'currency',
    currency: 'usd',
  },
  {
    title: 'COMMISSION PAID',
    key: 'commission_paid',
    value: 240,
    percentage: 15,
    type: 'currency',
    currency: 'usd',
  },
];

const glanceData15Days = [
  {
    title: 'CONSULTATIONS',
    key: 'consultations',
    value: 20,
    percentage: 10,
    type: 'number',
  },
  {
    title: 'ORDERS PLACED',
    key: 'orders_placed',
    value: 10,
    percentage: -10,
    type: 'number',
  },
  {
    title: 'CONVERSION',
    key: 'conversion',
    value: 40,
    percentage: -10,
    type: 'number',
  },
  {
    title: 'TOTAL SALE VALUE',
    key: 'total_sale_value',
    value: 1800,
    percentage: 25,
    type: 'currency',
    currency: 'usd',
  },
  {
    title: 'AVERAGE ORDER VALUE',
    key: 'average_order_value',
    value: 180,
    percentage: 25,
    type: 'currency',
    currency: 'usd',
  },
  {
    title: 'COMMISSION PAID',
    key: 'commission_paid',
    value: 180,
    percentage: 5,
    type: 'currency',
    currency: 'usd',
  },
];

const consultationsData = {
  'Experts Online': {
    key: 'Experts Online',
    values: [
      {
        x: 'Mon',
        key: 'monday',
        y: 28,
      },
      {
        x: 'Tue',
        key: 'tuesday',
        y: 28,
      },
      {
        x: 'Wed',
        key: 'wednesday',
        y: 33,
      },
      {
        x: 'Thu',
        key: 'thursday',
        y: 54,
      },
      {
        x: 'Fri',
        key: 'friday',
        y: 32,
      },
      {
        x: 'Sat',
        key: 'saturday',
        y: 38,
      },
      {
        x: 'Sun',
        key: 'sunday',
        y: 38,
      },
    ],
  },
  Incoming: {
    key: 'Incoming',
    values: [
      {
        x: 'Mon',
        key: 'monday',
        y: 40,
      },
      {
        x: 'Tue',
        key: 'tuesday',
        y: 40,
      },
      {
        x: 'Wed',
        key: 'wednesday',
        y: 44,
      },
      {
        x: 'Thu',
        key: 'thursday',
        y: 48,
      },
      {
        x: 'Fri',
        key: 'friday',
        y: 32,
      },
      {
        x: 'Sat',
        key: 'saturday',
        y: 42,
      },
      {
        x: 'Sun',
        key: 'sunday',
        y: 39,
      },
    ],
  },
  Answered: {
    key: 'Answered',
    values: [
      {
        x: 'Mon',
        key: 'monday',
        y: 18,
      },
      {
        x: 'Tue',
        key: 'tuesday',
        y: 18,
      },
      {
        x: 'Wed',
        key: 'wednesday',
        y: 33,
      },
      {
        x: 'Thu',
        key: 'thursday',
        y: 44,
      },
      {
        x: 'Fri',
        key: 'friday',
        y: 10,
      },
      {
        x: 'Sat',
        key: 'saturday',
        y: 20,
      },
      {
        x: 'Sun',
        key: 'sunday',
        y: 20,
      },
    ],
  },
};

const currentvspastperiodData = {
  Consultations: {
    key: 'Consultations',
    values: [
      {
        x: 'This week',
        key: 'this_week',
        y: 30,
      },
      {
        x: 'Last week',
        key: 'last_week',
        y: 20,
      },
    ],
  },
  'Orders Closed': {
    key: 'Orders Closed',
    values: [
      {
        x: 'This week',
        key: 'this_week',
        y: 28,
      },
      {
        x: 'Last week',
        key: 'last_week',
        y: 10,
      },
    ],
  },
};

const forecastData = [
  {
    title: 'sales',
    key: 'sales',
    percentage: 15,
  },
  {
    title: 'consultations',
    key: 'consultations',
    percentage: -15,
  },
];
const orderData = {
  columns: [
    {
      title: 'Product',
      key: 'product',
    },
    {
      title: 'Date',
      key: 'date',
    },
    {
      title: 'Time Spent',
      key: 'time_spent',
    },
    {
      title: 'Order Value',
      key: 'order_value',
    },
    {
      title: 'Commission',
      key: 'commission',
    },
  ],
  values: [
    {
      product: 'Product 1',
      date: '2024-12-18T19:00:00Z',
      time_spent: '300',
      order_value: '100',
      commission: '10',
      currency: 'usd',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      product: 'Product 2',
      date: '2024-12-19T16:00:00Z',
      time_spent: '200',
      order_value: '150',
      commission: '15',
      currency: 'usd',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
      product: 'Product 3',
      date: '2024-12-19T21:00:00Z',
      time_spent: '150',
      order_value: '200',
      commission: '20',
      currency: 'usd',
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    },
  ],
};

const fetchGlanceData = async ({ days }: { days: string }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(days === '7' ? glanceData : glanceData15Days);
    }, 1000);
  });
};

const fetchConsultationsData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(consultationsData);
    }, 1000);
  });
};

const fetchCurrentvspastperiodData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(currentvspastperiodData);
    }, 1000);
  });
};

const fetchForecastData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(forecastData);
    }, 1000);
  });
};

const fetchOrderData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orderData);
    }, 1500);
  });
};

export {
  fetchGlanceData,
  fetchConsultationsData,
  fetchCurrentvspastperiodData,
  fetchForecastData,
  fetchOrderData,
};
