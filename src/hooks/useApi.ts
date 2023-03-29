import { api } from '../utils/api';

export function useApi() {

  async function get(url: string) {
    const { data } = await api.get(url);

    return data;
  }

  return {
    get
  };
}
