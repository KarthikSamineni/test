import { NextResponse } from 'next/server'

export async function GET() {
  // Here you would fetch the files from your database
  // For now, we'll return mock data
  const mockFiles = [
    { id: '1', name: 'example1.las', uploadDate: new Date().toISOString() },
    { id: '2', name: 'example2.las', uploadDate: new Date().toISOString() },
  ]
  return NextResponse.json(mockFiles)
}
