import React, { useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({
  id,
  likes = 0,
  src = DEFAULT_IMAGE
}) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  /**
   * const observer = new window.IntersectionObserver(entries => {
   * this isnt a good practice because not all the browsers
   * supports it,
   * we are first checking if the dependency is supported
   * by the web browser
   */
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })

      observer.observe(element.current)
    })
  }, [element])

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Button>
              <MdFavoriteBorder size='32px' /> likes!
            </Button>
          </>
      }
    </Article>
  )
}