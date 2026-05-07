import { notFound } from "next/navigation";
import { TaskDetailPage } from "@/components/tasks/task-detail-page";
import { fetchTaskPosts } from "@/lib/task-data";
import { buildPostMetadata } from "@/lib/seo";

export const revalidate = 3;
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = (await fetchTaskPosts("classified", 1000, { fresh: true, allowMockFallback: false })).find((item) => item.slug === params.slug) || null;
  if (!post) return {};
  return buildPostMetadata("classified", post);
}

export default async function ClassifiedDetailPage({ params }: { params: { slug: string } }) {
  const post = (await fetchTaskPosts("classified", 1000, { fresh: true, allowMockFallback: false })).find((item) => item.slug === params.slug) || null;
  if (!post) notFound();
  return <TaskDetailPage task="classified" slug={params.slug} />;
}
