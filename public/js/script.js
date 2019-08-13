$(document).ready(function(){
  $.ajax({
    url: 'http://192.168.33.10:3000/people',
    dataType: 'json',
    type: 'get',
    success:function(dataFromServer){
      console.log(dataFromServer);
    },
    error:function(error){
      console.log(error);
      console.log('something went wrong');
    }
  })


  //The Long way
  // $('.genderRadio').click(function(){
  //   const gender = $(this).val();
  //   console.log(gender);
  //   if(gender === 'Male'){
  //     $.ajax({
  //       url: 'http://192.168.33.10:3000/gender/g=male',
  //       dataType: 'json',
  //       type: 'get',
  //       success:function(maleData){
  //         console.log(maleData);
  //       },
  //       error:function(error){
  //         console.log(error);
  //         console.log('something went wrong');
  //       }
  //     })
  //   } else {
  //     $.ajax({
  //       url: 'http://192.168.33.10:3000/gender/g=female',
  //       dataType: 'json',
  //       type: 'get',
  //       success:function(femaleData){
  //         console.log(femaleData);
  //       },
  //       error:function(error){
  //         console.log(error);
  //         console.log('something went wrong');
  //       }
  //     })
  //   }
  //
  // })

  $('.genderRadio').click(function(){
    const gender = $(this).val().toLowerCase();
    $.ajax({
      url: `http://192.168.33.10:3000/gender/g=${gender}`,
      dataType: 'json',
      type: 'get',
      success:function(data){
        console.log(data);
      },
      error:function(error){
        console.log(error);
        console.log('something went wrong');
      }
    })
  })

})
