module.exports = {
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        post: {
          field: "Slug",
          references: "Title",
        },
        event: {
          field: "Slug",
          references: "Event_name",
        },
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 10,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
};
