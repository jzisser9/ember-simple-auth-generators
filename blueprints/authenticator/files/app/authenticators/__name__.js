<%
let baseClass;
let importPath;

switch(type) {
  case 'devise':
    baseClass = 'DeviseAuthenticator';
    importPath = 'ember-simple-auth/authenticators/devise';
    break;
  case 'oauth2implicit':
    baseClass = 'OAuth2ImplicitGrantAuthenticator';
    importPath = 'ember-simple-auth/authenticators/oauth2-implicit-grant';
    break;
  case 'oauth2password':
    baseClass = 'OAuth2PasswordGrantAuthenticator';
    importPath = 'ember-simple-auth/authenticators/oauth2-password-grant';
    break;
  case 'torii':
    baseClass = 'ToriiAuthenticator';
    importPath = 'ember-simple-auth/authenticators/torii';
    break;
  default:
    throw new Error('type must be one of: devise, oauth2implicit, oauth2password, torii but was ' + type);
}
%>import <%= baseClass %> from '<%= importPath %>';

export default class <%= classifiedModuleName %>Authenticator extends <%= baseClass %> {}
