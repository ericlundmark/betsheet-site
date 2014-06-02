Meteor.startup(function() {
  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
  });
  return AccountsEntry.config({
    logo: 'logo.png',
    privacyUrl: '/privacy-policy',
    termsUrl: '/terms-of-use',
    homeRoute: '/',
    dashboardRoute: '/dashboard',
    profileRoute: 'profile',
    showSignupCode: false
  });
});
