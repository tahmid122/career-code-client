export const myApplicationPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/applications?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },

    credentials: "include",
  }).then((res) => res.json());
};
