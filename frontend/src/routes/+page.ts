import { PUBLIC_API_KEY } from "$env/static/public";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  return {
    props: {
      public: PUBLIC_API_KEY,
    },
  };
}