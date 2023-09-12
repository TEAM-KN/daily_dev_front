import React from 'react'
import ScrollTopButton from '../components/buttons/ScrollTopButton'
import Header from '../layouts/Header'
import PostList from '../layouts/PostList'

export default function Main() {
  return (
    <main className="relative px-0 sm:px-6 py-24 sm:py-32 lg:px-8">
      <PostList />
      <ScrollTopButton />
    </main>
  )
}
