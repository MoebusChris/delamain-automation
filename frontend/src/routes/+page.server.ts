import { SECRET_API_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
  return {
    props: {
      secret: SECRET_API_KEY,
    },
  };
}