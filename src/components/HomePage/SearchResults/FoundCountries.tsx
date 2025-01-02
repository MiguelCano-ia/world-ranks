interface Props {
  lengthCountries: number,
}

export const FounCountries = ({ lengthCountries }: Props) => {
  return (
    <p className="font-sans text-secondary-300 text-heading-sm font-semibold">Found { lengthCountries } countries</p>
  )
}
