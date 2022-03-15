export function emailValidation(email) {
  var val = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return val.test(String(email).toLowerCase());
}

export function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}