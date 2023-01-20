export const API_URL = "https://content.guardianapis.com/search?show-elements=image&show-fields=thumbnail,body,headline";
export const API_KEY = "test";
export const topapiEndpoint = (orderBy, page, pageSize) => `${API_URL}&section=news&api-key=${API_KEY}&order-by=${orderBy}&page=${page}&page-size=${pageSize}`;
export const otherapiEndpoint = (sectionName, orderBy, page, pageSize) => `${API_URL}&section=${sectionName}&api-key=${API_KEY}&order-by=${orderBy}&page=${page}&page-size=${pageSize}`;
export const searchapiEndpoint = (query, orderBy, page, pageSize) => `${API_URL}&q=${query}&api-key=${API_KEY}&order-by=${orderBy}&page=${page}&page-size=${pageSize}`;

export const categoryTitle = (category) => `<h2>${category}</h2>`;
// export const API_KEY = "afc9d312-0c20-4c01-929e-3c98eaf3d82c";