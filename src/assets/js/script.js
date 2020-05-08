$(document).ready(function() {
  $('.nav-link-collapse').on('click', function() {
    $('.nav-link-collapse').not(this).removeClass('nav-link-show');
    $(this).toggleClass('nav-link-show');

  //   $('a').click(function() { 
  //     $('a.list-group-item.active').removeClass("active"); 
  //     $(this).addClass("active"); 
  // }); 
  });

  
});

$( document ).ready(function() {
  $('.dropdown-item').on('click',function (){
    if($(this).attr('href')){
      alert('redirect to '+$(this).attr('href'));
      window.location.replace($(this).attr('href'));      
       }    
  });
});



// $(function() {
//   $( "#datepicker" ).datepicker({
//       dateFormat : 'mm/dd/yy',
//       changeMonth : true,
//       changeYear : true,
//       yearRange: '-100y:c+nn',
//       maxDate: '-1d'
//   });
// });

// $(function () {
//   $("#datepicker").datepicker({ 
//         autoclose: true, 
//         todayHighlight: true
//   }).datepicker('update', new Date());
// });

// $(document).ready(function () {
//   $('#datepicker').datepicker({
//     uiLibrary: 'bootstrap'
//   });  
// });



function loginvalidation() {
  $("#Registr_form").validate();
}

function resetpassword(){
  $("#Form_ResetPassword").validate();
}
function forgotpassword(){
  $("#forgotpswd").validate();  
}
function newrequist(){
  $("#NewRequisition").validate();  
} 

function emailvalid(){
  $("#Emailtemplate").validate();
}

// function dropdownvalid(){
//  //$('#NewRequisition').select2();
//  $('.select2').select2();
// }

function loginback(){
  $('#acceso').hide();
  $('#loginacceso').hide();
  $('#form-olvidado1').show();
  $('#form-olvidado').hide();
}

function showforgotpswd(){
  $('#form-olvidado').show();
  $('#form-olvidado1').hide();
  $('#acceso').show();
  $('#loginacceso').show();
}




$(document).ready(function() { 
  //$('#acceso').hide();   
  $('#olvidado').click(function() { alert('sdf');
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
    $('#acceso').show(); 
    location.hash = "forgotpassword";
  }); 
  $('#acceso').click(function() { 
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
    $('#acceso').hide(); 
     location.hash = "login";
  });
   
 
  var hash = $(location).prop('hash');
  
  if(hash == "#forgotpassword"){
  $('#olvidado').trigger("click");
  }
  if(hash == "#login"){
    $('#acceso').trigger("click");
    }
});

// $( document ).ready(function() {
//   $('.dropdown-item').on('click',function (){
//     if($(this).attr('href')){
//       alert('redirect to '+$(this).attr('href'));
//       window.location.replace($(this).attr('href'));
      
//        }
//   });
// });

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

    $(document).ready(function() { 
    // Hide submenus
       $('#body-row .collapse').collapse('hide'); 

       // Collapse/Expand icon
       $('#collapse-icon').addClass('fa-angle-double-left'); 
       
       // Collapse click
       $('[data-toggle=sidebar-colapse]').click(function() {
           SidebarCollapse();
       });   

      
  });  
     
       function SidebarCollapse () {
           $('.menu-collapsed').toggleClass('d-none');
           $('.sidebar-submenu').toggleClass('d-none');
           $('.submenu-icon').toggleClass('d-none');
           $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
           
           // Treating d-flex/d-none on separators with title
           var SeparatorTitle = $('.sidebar-separator-title');
           if ( SeparatorTitle.hasClass('d-flex') ) {
               SeparatorTitle.removeClass('d-flex');
           } else {
               SeparatorTitle.addClass('d-flex');
           }
           
           // Collapse/Expand icon
           $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
       }
       

       
        
       