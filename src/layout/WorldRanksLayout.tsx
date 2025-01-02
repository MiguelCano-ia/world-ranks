interface Props {
  children: React.ReactNode
}

export const WorldRanksLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen relative">
      <div className="h-36 sm:h-72 w-full bg-[url('../../public/images/hero-image-wr.jpg')] bg-fill bg-center" />
      
      <img 
        src="../../public/svg/logo.svg" 
        alt="logo" 
        className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-28"
      />
      {children}
    </div>
  )
}

