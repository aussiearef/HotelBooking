const config={
    cognito:{
        identityPoolId:"", // put your AWS Cognito Identity Pool ID here
        cognitoDomain:"", // put your AWS Cognito domain here i.e., hote.mydomain.com
        appId:"" // Create an Applicaiton in AWS Cognito (under User Pool) and put its ID here.
    }
}

var cognitoApp={
    auth:{},
    Init: function()
    {

        var authData = {
            ClientId : config.cognito.appId,
            AppWebDomain : config.cognito.cognitoDomain,
            TokenScopesArray : ['email', 'openid'],
            RedirectUriSignIn : 'http://localhost:8080/hotel/',
            RedirectUriSignOut : 'http://localhost:8080/hotel/',
            UserPoolId : config.cognito.identityPoolId, 
            AdvancedSecurityDataCollectionFlag : false,
                Storage: null
        };

        cognitoApp.auth = new AmazonCognitoIdentity.CognitoAuth(authData);
        cognitoApp.auth.userhandler = {
            onSuccess: function(result) {
              
            },
            onFailure: function(err) {
            }
        };
    }
}