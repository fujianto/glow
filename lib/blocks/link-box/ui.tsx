import { CoreBlock } from '@/app/components/CoreBlock';
import Link from 'next/link';

interface Props {
  title: string;
  label: string;
  icon: string;
  link: string;
}

export function LinkBox({ title, label, link }: Props) {
  return (
    <CoreBlock>
      <Link href={link}>
        <div className="flex flex-col gap-2">
          <div className="w-12 h-12 rounded-md bg-gray-600"></div>
          <div className="flex flex-col">
            <span className="font-semibold text-base text-stone-900">
              {title}
            </span>
            <span className="text-stone-600 text-sm">{label}</span>
          </div>
        </div>
      </Link>
    </CoreBlock>
  );
}
