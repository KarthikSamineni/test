"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'

interface File {
  id: string
  name: string
  uploadDate: string
}

export default function FileList() {
  const [files, setFiles] = useState<File[]>([])

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Uploaded Files</h3>
      <ul className="space-y-2">
        {files.map((file) => (
          <li key={file.id} className="bg-white shadow rounded-lg p-4">
            <Link href={`/viewer/${file.id}`} className="text-blue-500 hover:underline">
              {file.name}
            </Link>
            <p className="text-sm text-gray-500">Uploaded on: {new Date(file.uploadDate).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
