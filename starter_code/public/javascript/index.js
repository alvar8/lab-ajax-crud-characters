const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(p=>{console.log(p)});
  })

  $('#fetch-one').on('click', (e) => {

      const id =$(".operation input").val();

    charactersAPI.getOneRegister(id).then(p=>{console.log(p)});
  })

  $('#delete-one').on('click', (e) => {
    const iddelete =$(".delete input").val();

  charactersAPI.deleteOneRegister(iddelete);
  })

  $('#edit-character-form').on('submit', (e) => {
      event.preventDefault();
      const idmodifi =$("#modifi-id").val();
      const characterinfo={
        name : $("#modifiname").val(),
        occupation :$("#modifiocupation").val(),
        weapon: $("#modifiweapon").val(),

      }
      charactersAPI.updateOneRegister(idmodifi,characterinfo);
  })

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    let createuser={
      name : $("#createname").val(),
      occupation :$("#createocupation").val(),
      weapon: $("#createweapon").val(),
      debt: $("#createcheckbox").val()

    }
    charactersAPI.createOneRegister(createuser);
  })
})
