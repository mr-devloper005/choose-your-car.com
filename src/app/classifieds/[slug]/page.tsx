import { TaskDetailPage } from "@/components/tasks/task-detail-page";
import { fetchTaskPostBySlug } from "@/lib/task-data";
import { buildPostMetadata } from "@/lib/seo";

export const revalidate = 3;
export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await fetchTaskPostBySlug("classified", slug);
  return post ? buildPostMetadata("classified", post) : {};
}

export default async function ClassifiedDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <TaskDetailPage task="classified" slug={slug} />;
}
