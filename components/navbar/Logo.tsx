import Link from 'next/link';
import { LuHome } from 'react-icons/lu';
import { Button } from '../ui/button';

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Button size='icon' variant='ghost'>
        <LuHome className='w-6 h-6' />
      </Button>
      <span className='text-lg font-semibold'>Homever</span>
    </Link>
  );
}

export default Logo;