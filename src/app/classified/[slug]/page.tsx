import { notFound } from "next/navigation";
import { TaskDetailPage } from "@/components/tasks/task-detail-page";
import { fetchTaskPostBySlug } from "@/lib/task-data";
import { buildPostMetadata } from "@/lib/seo";

export const revalidate = 3;
export const dynamic = "force-dynamic";

type PageParams = { params: Promise<{ slug: string }> | { slug: string } };

const resolveSlug = async (params: PageParams["params"]) =>
  (await Promise.resolve(params)).slug;

export async function generateMetadata({ params }: PageParams) {
  const slug = await resolveSlug(params);
  const post = await fetchTaskPostBySlug("classified", slug);
  if (!post) return {};
  return buildPostMetadata("classified", post);
}

export default async function ClassifiedDetailPage({ params }: PageParams) {
  const slug = await resolveSlug(params);
  const post = await fetchTaskPostBySlug("classified", slug);
  if (!post) notFound();
  return <TaskDetailPage task="classified" slug={slug} />;
}
