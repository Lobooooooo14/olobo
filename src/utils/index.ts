export function currentYearsOld(birthday: Date) {
  const date = new Date()

  let years = date.getFullYear() - birthday.getFullYear()
  const months = date.getMonth() - birthday.getMonth()

  if (months < 0 || (months === 0 && date.getDate() < birthday.getDate())) {
    years--
  }

  return years
}
