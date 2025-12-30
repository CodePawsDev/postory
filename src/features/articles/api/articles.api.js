import { http } from "@/api/http";

export async function getPosts() {
  const response = await http.get("/posts");
  const data = response.data;

  // API return array directly
  if (Array.isArray(data)) {
    return data;
  }

  // API return { data: [...] }
  if (data && Array.isArray(data.data)) {
    return data.data;
  }

  // API return { posts: [...] }
  if (data && Array.isArray(data.posts)) {
    return data.posts;
  }

  // Unexpected response shape
  console.warn("[getPosts] Unexpected response shape:", data);
  return [];
}

