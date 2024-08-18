import LASViewer from "@/components/LASViewer";

export default function ViewerPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">LAS File Viewer</h2>
      <LASViewer fileId={params.id} />
    </div>
  )
}