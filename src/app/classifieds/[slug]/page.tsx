import { TaskDetailPage } from "@/components/tasks/task-detail-page";
import { fetchTaskPostBySlug } from "@/lib/task-data";
import { buildPostMetadata } from "@/lib/seo";

export const revalidate = 3;
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetchTaskPostBySlug("classified", params.slug);
  return post ? buildPostMetadata("classified", post) : {};
}

export default async function ClassifiedDetailPage({ params }: { params: { slug: string } }) {
  return <TaskDetailPage task="classified" slug={params.slug} />;
}
