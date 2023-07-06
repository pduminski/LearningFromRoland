const id = "12345";

export const mutation = `
mutation MyMutation {
    acceptUser(id: "${id}") {
      userMetadata {
        creationTimestamp
      }
      status
      additionalData
    }
  } 
  ` as const;