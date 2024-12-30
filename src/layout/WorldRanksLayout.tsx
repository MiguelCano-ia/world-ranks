interface Props {
  children: React.ReactNode
}

export const WorldRanksLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen relative">
      <div className="h-32 sm:h-64 w-full bg-[url('../../public/images/hero-image-wr.jpg')] bg-fill bg-center" />
      
      <img 
        src="../../public/svg/logo.svg" 
        alt="logo" 
        className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-28"
      />
      
      <div className="sm:px-12 sm:-mt-16 ">
        <div className="bg-secondary-900 sm:rounded-t-lg min-h-screen sm:border-[1px] sm:border-secondary-700">
          <div className="p-8 flex flex-col gap-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

