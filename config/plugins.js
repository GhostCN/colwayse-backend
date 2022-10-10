module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dear2atz4'),
        api_key: env('659384867732872'),
        api_secret: env('RYn4rC06TG9nPeo0Xwuc8NnG6C0'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
