$(document).ready(function () {


  // let fnameError = true;
  $('#fname').on('blur', function () {
    fnameValidate();

  });

  function fnameValidate() {
    var fname = $('#fname').val();
    var regex = /^[a-zA-Z\s]+$/;
    if (fname === "") {
      $('#fnameErr').html("Name required");
      // fnameError=false;     
    }
    else {
      if (regex.test(fname) === false) {
        $('#fnameErr').html("Enter valid name");
        // fnameError=false;
      }
      else {
        $('#fnameErr').html("");
      }
    }
  }


  $('#lname').on('blur', function () {
    lnameValidate();
  });

  function lnameValidate() {
    var lname = $('#lname').val();
    var regex = /^[a-zA-Z\s]+$/;
    if (lname === "") {
      $('#lnameErr').html("Name required");
    }
    else {
      if (regex.test(lname) === false) {
        $('#lnameErr').html("Enter valid name");
      }
      else {
        $('#lnameErr').html("");
      }
    }

  }



  $('#add1').on('blur', function () {
    add1Validate();
  });

  function add1Validate() {
    var addline1 = $('#add1').val();
    var regex = /^[a-zA-Z\s]+$/;
    if (addline1 === "") {
      $('#add1Err').html("Address required");
    }
    else {
      if (regex.test(addline1) === false) {
        $('#add1Err').html("Enter valid required");
      }
      else {
        $('#add1Err').html("");
      }
    }
  }


  $('#add2').on('blur', function () {
    add2Validate();
  });

  function add2Validate() {
    var addline2 = $('#add2').val();
    var regex = /^[a-zA-Z\s]+$/;
    if (addline2 === "") {
      $('#add2Err').html("Address required");
    }
    else {
      if (regex.test(addline2) === false) {
        $('#add2Err').html("Enter valid required");
      }
      else {
        $('#add2Err').html("");
      }
    }
  }


  $('#city').on('blur', function () {
    cityValidate();
  });

  function cityValidate() {
    var city = $('#city').val();
    var regex = /^[a-zA-Z\s]+$/;
    if (city === "") {
      $('#cityErr').html("Details required");
    }
    else {
      if (regex.test(city) === false) {
        $('#cityErr').html("Enter valid data");
      }
      else {
        $('#cityErr').html("");
      }
    }
  }


  $('#state').on('blur', function () {
    stateValidate();
  });

  function stateValidate() {
    var state = $('#state').val();
    var regex = /^[a-zA-Z\s]+$/;
    if (state === "") {
      $('#stateErr').html("Details required");
    }
    else {
      if (regex.test(state) === false) {
        $('#stateErr').html("Enter valid data");
      }
      else {
        $('#stateErr').html("");
      }
    }
  }


  $('#pin').on('blur', function () {
    pinValidate();
  });

  function pinValidate() {
    var pcode = $('#pin').val();
    var pinRegex = /^\d{4}$|^\d{6}$/;
    if (pcode === "") {
      $('#zipErr').html("Details required");
    }
    else {
      if (pinRegex.test(pcode) === false) {
        $('#zipErr').html("Enter valid PIN code");
      }
      else {
        $('#zipErr').html("");
      }
    }
  }


  $('#phone').on('blur', function () {
    phoneValidate();
  });

  function phoneValidate() {
    var phoneNum = $('#phone').val();
    var phoneregex = /^[6-9]\d{9}$/;
    if (phoneNum === "") {
      $('#phoneErr').html("Details required");
    }
    else {
      if (phoneregex.test(phoneNum) === false) {
        $('#phoneErr').html("Enter valid phone number");
      }
      else {
        $('#phoneErr').html("");
      }
    }
  }


  $('#email').on('blur', function () {
    emailValidate();
  });

  function emailValidate() {
    var email = $('#email').val();
    var phoneregex = /^[6-9]\d{9}$/;
    if (phoneregex.test(email) === false) {
      $('#emailErr').html("Enter valid email");
    }
    else {
      $('#emailErr').html("");
    }
  }

  $('#about').on('blur', function () {
    selectValidate();
  });

  function selectValidate() {
    var select = $('#about').val();
    if (select == "") {
      $('#selectErr').html("Select required");
    }
    else {
      $('#selectErr').html("");
    }
  }


  $('#fdb').on('blur', function () {
    maxLen();
  });

  function maxLen() {
    var feedback = $('#fdb').val();
    if (feedback.length > 15) {
      $('#fdbErr').html("Maximum 15 chataters only");
    }
    else {
      $('#fdbErr').html("");
    }
  }


  $('#suggest').on('blur', function () {
    maxLen();
  });

  function maxLen() {
    var suggestion = $('#suggest').val();
    if (suggestion.length > 15) {
      $('#suggErr').html("Maximum 15 chataters only");
    }
    else {
      $('#suggErr').html("");
    }
  }

  checkboxError = true;
  $('#check').on('blur', function () {
    checkboxValidate();
  });

  function checkboxValidate() {
    var check = $('#check');
    if ($('#check').is(':checked') == false) {
      $('#checkBoxErr').html("Checkbox not selected");
      checkboxError = false;
    }
    else {
      $('#checkBoxErr').html("");
    }
  }



  $('.gender').on('blur', function () {
    genderValidate();
  });

  function genderValidate() {
    var check = $('#check').val();
    if ($("input[name='gender']:checked").length == 0) {
      $('#genErr').html("please select gender");
    }
    else {
      $('#genErr').html("");
    }
  }
  $('#submitBtn').click(function () {

    // fnameValidate();
    // lnameValidate();
    // addValidate();
    // cityValidate();
    // stateValidate();
    // pinValidate();
    // phoneValidate();
    // emailValidate();
    // selectValidate();
    // maxLen();
    // checkboxValidate();

    if (fnameValidate() == true || lnameValidate() == true || add1Validate() == true || cityValidate() == true || stateValidate() == true || pinValidate() == true || phoneValidate() == true || selectValidate() == true || checkboxValidate() == true || genderValidate() == true) {
      return true;
    } else {
      return false;
    }


  });
  // $('#myform').submit(function(event) {
  //   event.preventDefault(); 
  // });


});