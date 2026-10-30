import { getCollection, type CollectionEntry, type CollectionKey } from "astro:content";

export type Data<C extends CollectionKey> = CollectionEntry<C>["data"];

export const dateRange = (start: string, end?: string) => (end ? `${start} – ${end}` : start);

export async function getSortedData<C extends CollectionKey>(collection: C): Promise<Data<C>[]> {
  const entries: CollectionEntry<C>[] = await getCollection(collection);
  return entries.sort((a, b) => a.data.order - b.data.order).map((e) => e.data);
}
