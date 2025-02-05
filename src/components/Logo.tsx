import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center justify-center sm:justify-end mt-2 absolute top-0 left-1/2 transform -translate-x-1/2 sm:left-1/4">
        <Image
            src="/favicon.ico"
            alt="Sshorty Logo"
            width={200}
            height={100}
            priority
        />
    </div>
  );
};

export default Logo;