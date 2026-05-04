import { notFound } from "next/navigation";
import { TaskDetailPage } from "@/components/tasks/task-detail-page";
import { fetchTaskPostBySlug } from "@/lib/task-data";
import { buildPostMetadata } from "@/lib/seo";

export const revalidate = 3;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetchTaskPostBySlug("classified", params.slug);
  if (!post) return {};
  return buildPostMetadata("classified", post);
}

export default async function ClassifiedDetailPage({ params }: { params: { slug: string } }) {
  const post = await fetchTaskPostBySlug("classified", params.slug);
  if (!post) notFound();
  return <TaskDetailPage task="classified" slug={params.slug} />;
}
