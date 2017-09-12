
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
//     $.ajax({
//   url: "http://ih-api.herokuapp.com/characters",
//   method: "GET",
//
//   success: function (response) {
//     console.log(response);
//
//   },
//   error: function (err) {
//
//   },
// });
return $.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
//     $.ajax({
//   url: `http://ih-api.herokuapp.com/characters/:${id}`,
//   method: "GET",
//
//   success: function (response) {
//     console.log(response);
//
//   },
//   error: function (err) {
//
//   },
// });
  return $.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister (characters) {
return $.post(`${this.BASE_URL}/characters`, {
  name: characters.name,
  occupation: characters.occupation,
  weapon: characters.weapon,
  debt: characters.debt
})
  }

  updateOneRegister (id,characterinfo) {

    $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: "PUT",
      data:characterinfo,
      success: function (response) {
        console.log(response);

      },
      error: function (err) {

      },
    });
  }

  deleteOneRegister (id) {
    $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: "DELETE",

      success: function (response) {
        console.log(response);

      },
      error: function (err) {

      },
    });
  }
}
