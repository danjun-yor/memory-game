export class MyClient {
  uri: string;
  fetchOptions: RequestInit;

  constructor({
    uri,
    fetchOptions
  }: {
    uri: string;
    fetchOptions?: RequestInit;
  }) {
    this.uri = uri;
    this.fetchOptions = { ...fetchOptions };
  }

  requestWithGraphQL = async (query: string) => {
    const token = localStorage.getItem("token");

    const res = await fetch(this.uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: token ? `Bearer ${token}` : ""
      },

      body: JSON.stringify({
        query
      }),

      ...this.fetchOptions
    });

    const { data, errors } = await res.json();

    return { data, errors };
  };
}

export default new MyClient({
  uri: "http://localhost:4000"
});
