//Add a click listener to our signup button within the form
document.getElementById('signupBtn').addEventListener('click', onSubmit);
//Add keydown listener for enter key events
document.getElementById('signupForm').addEventListener('keydown',
    function(event){
        //check if event is from the enter/return key
        if(event.keyCode == 13){
            onSubmit(event);
        }
});
var onSubmit = function(event){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    //validate the form before continuing
    if(isValidSignup(name, email, password)){

        //signup user using Firebase Auth API
        signupUser(email, password, function(){
            /*
             * Invoke the growsurf JS SDK to create a new contact
             * within our referral campaign
             */
            addUserToCampaign('re1vv9', name, email);
        });

    } else {
        alert('Please complete the form.');
    }
};

var signupUser = function(email, password, cb){
    //signup user using Firebase
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(cb)
    .catch(function(error) {
       //Firebase returned an error
       alert('Signup Failed!\n\nFirebase says ' + error.message);
    });
};

var addUserToCampaign = function(campaignId, name, email){
    growsurf.createContact(campaignId, email, name, {}, function(response){
        if(response && response.meta && response.meta.code === 200){
            var contact = response.data.contact;
            var referralUrl = (window.location.href + '?grsf=' + contact.id);
            alert('Thank you ' + name + '\n\n Your referral link is ' + referralUrl);
        } else {
            alert('Failed to add contact to GrowSurf campaign' + campaignId);
        }
    });
};
