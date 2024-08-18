import FileList from '@/components/FileList'
import FileUpload from '../components/FileUpload'
import AA from "@/components/AA"

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Welcome to LAS Viewer</h2>
      <AA />
      <FileList />
    </div>
  )
}