import { parseISO, format } from 'date-fns';

export default function Date(props) {
  const { dateString } = props
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}