import { http } from "../../../api/http";

export async function getArticles({
  category,
  keyword,
  page = 1,
  limit = 6,
} = {}) {
  const trimmedKeyword = keyword?.trim(); // trim the keyword to remove whitespace

  const response = await http.get("/posts", {
    params: {
      ...(category ? { category } : {}),
      ...(trimmedKeyword ? { keyword: trimmedKeyword } : {}),
      page,
      limit,
    },
  });

  const data = response.data;

  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.data)) return data.data;
  if (data && Array.isArray(data.posts)) return data.posts;

  console.warn("[getArticles] Unexpected response shape:", data);
  return [];
}

