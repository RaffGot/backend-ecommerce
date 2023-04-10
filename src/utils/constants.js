const ROUTES = Object.freeze({
  API: "/api",
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCT: "/product/:id",
  USER: "/user/:id",
  LOGIN: "/login",
  REGISTER: "/register",
  LOGOUT: "/logout",
  UPLOAD: "/upload",
  DOWNLOAD: "/download",
  AWS_S3_FILE: "/s3/:id",
  PROFILE: "/profile",
  EDIT_PROFILE: "/edit-profile",
  POSTS: "/posts",
  POST: "/post/:id",
  CREATE_POST: "/create-post",
  EDIT_POST: "/edit-post/:id",
  ABOUT: "/about",
  CONTACT: "/contact",
  NOT_FOUND: "/not-found",
});

const MONGODB_COLLECTIONS = Object.freeze({
  PRODUCT: "product",
});

const SWAGGUER_OPTIONS = Object.freeze({
  API_DOCS: "/api-docs",
});

module.exports = { ROUTES, MONGODB_COLLECTIONS, SWAGGUER_OPTIONS };
