const numberformatter = new Intl.NumberFormat('en')
export const formatNumber = (value : number) : string => {
  return numberformatter.format(value)
}
