export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_UxOEt2SAYshf9ZKR6NnLg5Z000n4B2GU8r",
  s3: {
    REGION: "us-west-2",
    BUCKET: "gc-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://eqo78bavdf.execute-api.us-west-2.amazonaws.com/gc"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_JLjSqfuwn",
    APP_CLIENT_ID: "43fgls7n78o8e7l952j8iorjom",
    IDENTITY_POOL_ID: "us-west-2:617ffcb7-5601-4ddf-9aec-cfa89b3dccb9"
  }
};
