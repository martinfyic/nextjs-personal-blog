import { FC } from 'react';
import { parseISO, format } from 'date-fns';

interface Props {
	dateString: string;
}

const DateFormatter: FC<Props> = ({ dateString }) => {
	const date = parseISO(dateString);
	return (
		<time
			className='text-slate-400'
			dateTime={dateString}
		>
			{format(date, 'LLLL d, yyyy')}
		</time>
	);
};
export default DateFormatter;
