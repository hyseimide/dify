import type { FC } from 'react'

type LogoEmbededChatAvatarProps = {
  className?: string
}
const LogoEmbededChatAvatar: FC<LogoEmbededChatAvatarProps> = ({
  className,
}) => {
  return (
    <img
      src='/logo/hyseim-logo-head.png'
      className={`block w-10 h-10 ${className}`}
      alt='logo'
    />
  )
}

export default LogoEmbededChatAvatar
