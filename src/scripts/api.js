// TODO: Silakan sesuaikan BASE URL dari endpoint Anda, misal external VM di GCP
const BASE_URL = 'http://<IP>:<PORT>';

const ENDPOINT = {
  predict: `${BASE_URL}/predict`,
};

class PredictAPI {
  static async predict(data) {
    const response = await fetch(ENDPOINT.predict, {
      method: 'POST',
      body: data,
      redirect: 'follow',
    });

    const json = await response.json();
    return json;
  }
}
