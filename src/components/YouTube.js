import youtube from '../services/api'
import React from 'react'
import { useState, useEffect } from 'react'
// const KEY = 'AIzaSyBmtmYVNdAEKWX04QdEUMJz_6szUoSe5sw'

const YouTube = () => {
  const [video, setVideo] = useState()

  const handleSubmit = async (id) => {
    const res = await youtube.get(`/search`, {
      params: {
        q: id
      }
    })
    setVideo(res.data.items[0].snippet.thumbnails.default.url)
    console.log(res.data, 'res')
  }

  useEffect(() => {
    handleSubmit('dog')
  }, [])

  return (
    <div>
      <img src={`${video}`} />
    </div>
  )
}

export default YouTube
