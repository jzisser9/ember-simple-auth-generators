'use strict';

module.exports = {
  description:
    'Generates an authenticator of the given type. Valid options are: devise, oauth2implicitgrant, oauth2passwordgrant, torii.',

  availableOptions: [
    {
      name: 'type',
      type: String,
      default: '',
    },
  ],

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall(options) {
  //   // Perform extra work here.
  // }
};
