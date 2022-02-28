// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  STRIPE_PUBLISHABLE_KEY: "pk_live_51JHiV9L2xwG7RCwgRoJ4v2MN1N81ObxBrKQImAlRZJBzFmDaFVn4hzFfZmoipf9qmaf2CdZBKUILmPO666rvOCQO00d42DXpwx",
  STRIPE_TEST_PUBLISHABLE_KEY: "pk_test_51JHiV9L2xwG7RCwgbcBanu6hjEI5ZZqdMhC6bHemx86O7OyJwXzYT6DEQ20MNiZH9nh7wZfl4Hn20aW4bguu3PlD002J1nMdsY",
  TEST_PRICE: "price_1KLDjnL2xwG7RCwgW2GO13XB",
  PRICE: "price_1KLDstL2xwG7RCwgTGX8CvV3",
  PAYMENT_METHOD_TYPES: "card"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.