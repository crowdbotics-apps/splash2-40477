import axios from "axios";
const splashAPI = axios.create({
  baseURL: "https://splash2-40477.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_v1_login_create(payload) {
  return splashAPI.post(`/api/v1/login/`, payload.data);
}

function api_v1_signup_create(payload) {
  return splashAPI.post(`/api/v1/signup/`, payload.data);
}

function rest_auth_user_retrieve(payload) {
  return splashAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return splashAPI.put(`/rest-auth/user/`, payload.data);
}

function rest_auth_user_partial_update(payload) {
  return splashAPI.patch(`/rest-auth/user/`, payload.data);
}

function api_docs_schema_retrieve(payload) {
  return splashAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function rest_auth_login_create(payload) {
  return splashAPI.post(`/rest-auth/login/`, payload.data);
}

function rest_auth_logout_retrieve(payload) {
  return splashAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return splashAPI.post(`/rest-auth/logout/`);
}

function api_v1_petcategory_list(payload) {
  return splashAPI.get(`/api/v1/petcategory/`);
}

function api_v1_petcategory_create(payload) {
  return splashAPI.post(`/api/v1/petcategory/`, payload.data);
}

function rest_auth_registration_create(payload) {
  return splashAPI.post(`/rest-auth/registration/`, payload.data);
}

function api_v1_petcategory_retrieve(payload) {
  return splashAPI.get(`/api/v1/petcategory/${payload.id}/`);
}

function api_v1_petcategory_update(payload) {
  return splashAPI.put(`/api/v1/petcategory/${payload.id}/`, payload.data);
}

function api_v1_petcategory_partial_update(payload) {
  return splashAPI.patch(`/api/v1/petcategory/${payload.id}/`, payload.data);
}

function api_v1_petcategory_destroy(payload) {
  return splashAPI.delete(`/api/v1/petcategory/${payload.id}/`);
}

function rest_auth_password_reset_create(payload) {
  return splashAPI.post(`/rest-auth/password/reset/`, payload.data);
}

function rest_auth_password_change_create(payload) {
  return splashAPI.post(`/rest-auth/password/change/`, payload.data);
}

function rest_auth_password_reset_confirm_create(payload) {
  return splashAPI.post(`/rest-auth/password/reset/confirm/`, payload.data);
}

function rest_auth_registration_verify_email_create(payload) {
  return splashAPI.post(`/rest-auth/registration/verify-email/`, payload.data);
}

export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_petcategory_list,
  api_v1_petcategory_create,
  rest_auth_registration_create,
  api_v1_petcategory_retrieve,
  api_v1_petcategory_update,
  api_v1_petcategory_partial_update,
  api_v1_petcategory_destroy,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
};
