const endpoints = {
  products: {
    all: `/product`,
    one: (id: string) => `/product/${id}`,
  },
};

export default endpoints;
