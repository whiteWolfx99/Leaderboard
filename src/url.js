class MakeApicall {
  constructor() {
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
  }

  getmethod = async () => {
    const result = await fetch(
      `${this.baseURL}/games/pBhOI5X0b21K8LZYP2hD/scores/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => res.json())
      .catch((err) => err);
    return result;
  };

  postmethod = async (username, mark) => {
    const result = await fetch(
      `${this.baseURL}/games/pBhOI5X0b21K8LZYP2hD/scores/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: username, score: mark }),
      },
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong on api server!');
        }
        return res.json();
      })
      .catch((err) => err);

    return result;
  };
}

module.exports = MakeApicall;
