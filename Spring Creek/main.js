if(!window.ConversationalForm){
    window.ConversationalForm = new cf.ConversationalForm({
        formEl: document.getElementById('conversationalForm'),
          context: document.getElementById("cf-context"),
          robotImage: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/house-building_1f3e0.png",
          userImage: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/hammer-and-pick_2692.png",
          // document.getElementById("info").classList.add,
          submitCallback: function(){

            var frm = $('#conversationalForm');


            $.ajax({
                type: "POST",
                url: "https://hooks.zapier.com/hooks/catch/2920411/psp8d7/",
                data: frm.serialize(),
                success: function (data) {
                    console.log('Submission was successful.');
                    console.log(data);

                },
                error: function (data) {
                    console.log('An error occurred.');
                    console.log(data);
                },
                

            });
          }
    });
  }
