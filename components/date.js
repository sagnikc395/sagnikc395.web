//adding date component to parse the dates

import parseISO from "date-fns/parseISO";
import format from "date-fns/format";

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;
