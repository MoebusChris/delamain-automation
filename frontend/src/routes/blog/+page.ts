import { getBlogList } from "./blog-service";

/** @type {import('./$type').PageLoad} */
export function load() {
    return getBlogList(1);
}