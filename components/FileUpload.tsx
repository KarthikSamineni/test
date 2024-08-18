"use client"
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

export default function FileUpload() {
  const [uploading, setUploading] = useState(false)

  const onDrop = async (acceptedFiles: File[]) => {
    setUploading(true)
    const formData = new FormData()
    formData.append('file', acceptedFiles[0])

    try {
      await axios.post('/api/upload', formData)
      alert('File uploaded successfully!')
    } catch (error) {
      console.error('Error uploading file:', error)
      alert('Error uploading file. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div 
      {...getRootProps()} 
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
    >
      <input {...getInputProps()} />
      {uploading ? (
        <p>Uploading...</p>
      ) : isDragActive ? (
        <p>Drop the LAS file here...</p>
      ) : (
        <p>Drag and drop a LAS file here, or click to select a file</p>
      )}
    </div>
  )
}
